-- شغّل الكود ده في Supabase SQL Editor بعد اللي عملته قبل كده
-- (جدول exam_attempts والـ RLS بتاعته المفروض يكونوا اتعملوا بالفعل)

-- Function آمنة: بتسجل محاولة امتحان وتدي نقط لو نجح (أول مرة بس)
create or replace function complete_course_exam(
  p_course_id text,
  p_score int,
  p_total int,
  p_points int
)
returns json
language plpgsql
security definer
as $$
declare
  v_passed boolean;
  v_already_passed boolean;
  v_new_total int;
begin
  if auth.uid() is null then
    raise exception 'Not authenticated';
  end if;

  v_passed := (p_score::float / p_total::float) >= 0.7;

  select exists(
    select 1 from exam_attempts
    where user_id = auth.uid() and course_id = p_course_id and passed = true
  ) into v_already_passed;

  insert into exam_attempts (user_id, course_id, score, passed)
  values (auth.uid(), p_course_id, p_score, v_passed);

  if v_passed and not v_already_passed then
    update profiles
    set points = points + p_points
    where id = auth.uid()
    returning points into v_new_total;
  else
    select points into v_new_total from profiles where id = auth.uid();
  end if;

  return json_build_object(
    'passed', v_passed,
    'already_passed', v_already_passed,
    'points', v_new_total
  );
end;
$$;
