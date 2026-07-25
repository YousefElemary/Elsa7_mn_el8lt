const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// 🔐 Get API key from environment variable
const GROQ_API_KEY = process.env.GROQ_API_KEY;

if (!GROQ_API_KEY) {
    console.error('❌ ERROR: GROQ_API_KEY not found in .env file!');
    console.error('Please create a .env file with: GROQ_API_KEY=your-api-key');
    process.exit(1);
}

console.log('✅ GROQ_API_KEY loaded successfully');

// ===== CORS Configuration =====
app.use(cors({
    origin: '*', // For development - restrict in production
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// ===== Request Logging =====
app.use((req, res, next) => {
    console.log(`📨 ${req.method} ${req.url}`);
    next();
});

// ===== Serve Static Files =====
app.use(express.static(__dirname));

// ===== Health Check =====
app.get('/health', (req, res) => {
    res.json({ 
        status: 'ok', 
        message: 'Server is running',
        timestamp: new Date().toISOString()
    });
});

// ===== Main Chat Endpoint =====
app.post('/api/chat', async (req, res) => {
    try {
        const { messages } = req.body;

        if (!messages || !Array.isArray(messages) || messages.length === 0) {
            return res.status(400).json({ error: 'Messages array is required' });
        }

        console.log(`📨 Processing ${messages.length} messages`);

        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${GROQ_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'llama-3.1-8b-instant',
                messages: messages,
                temperature: 0.3,
                max_tokens: 900
            })
        });

        const data = await response.json();

        if (data.error) {
            console.error('❌ Groq API Error:', data.error);
            return res.status(response.status).json({ error: data.error });
        }

        console.log('✅ Response sent successfully');
        res.json(data);

    } catch (error) {
        console.error('❌ Server Error:', error);
        res.status(500).json({ 
            error: 'Internal server error',
            message: error.message
        });
    }
});

// ===== Serve index.html for root =====
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// ===== 404 Handler =====
app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint not found' });
});

// ===== Start Server =====
app.listen(PORT, () => {
    console.log(`\n🚀 Server running on http://localhost:${PORT}`);
    console.log(`📡 Health: http://localhost:${PORT}/health`);
    console.log(`📡 Chat: http://localhost:${PORT}/api/chat`);
    console.log(`🔑 API Key: ${GROQ_API_KEY ? '✅ Loaded' : '❌ Missing'}`);
    console.log(`\n💡 Test with: curl http://localhost:${PORT}/health\n`);
});