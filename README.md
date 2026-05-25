---

# Why I Built This

I built Mallu AI because I wanted to create my own real-time AI voice assistant inspired by Jarvis.
I was interested in combining speech recognition, AI APIs, and voice synthesis into a single assistant
that could interact naturally through conversation.

I also wanted to challenge myself by building the project on a low-end laptop using lightweight tools
and cloud-based AI inference for fast responses.

Another goal was to make the assistant support:
- English
- Malayalam
- Manglish

since most voice assistants do not properly support regional language conversations.

This project helped me better understand:
- AI API integration
- Speech recognition
- Real-time audio processing
- Voice synthesis
- Multithreading in Python
- Conversational AI systems

---

# Challenges Faced

Some challenges while building this project included:

- Reducing AI response delay
- Handling microphone background noise
- Preventing false speech detections
- Supporting Malayalam and Manglish conversations
- Managing real-time interruption while speaking
- Creating smooth wake-word activation
- Running AI efficiently on low-end hardware

---

# What I Learned

During this project I learned how to:

- Use Groq AI APIs for fast AI responses
- Implement speech-to-text using Faster-Whisper
- Generate realistic AI voice using Edge-TTS
- Process microphone audio in real time
- Build multilingual conversational systems
- Use threading for interruption handling
- Create idle-mode and wake-word systems

---

# How to Customize

You can customize the assistant easily by:

- Changing the AI personality inside `meck.py`
- Using different Edge-TTS voices
- Modifying the wake word
- Adding new automation features
- Connecting ESP32 or IoT devices
- Adding GUI animations and effects
- Changing response styles and memory behavior

---

# Local Development

To edit the project locally:

1. Clone the repository
2. Open the folder in VS Code
3. Create a virtual environment
4. Install dependencies
5. Edit:
   - `meck.py`
6. Run using:

```bash
py -3.11 meck.py
```

---

# Hardware Requirements

This project was designed to run on low-end hardware and does not require:
- Dedicated GPU
- Expensive AI hardware
- Local large language models

Minimum requirements:
- Intel i3 processor
- 4GB RAM
- Integrated graphics
- Internet connection

---

# Performance

The project uses:
- Cloud AI inference through Groq
- Lightweight local speech recognition
- Optimized audio processing

This allows the assistant to provide:
- Low-latency responses
- Fast startup
- Smooth performance on low-end systems

---

# Live Demo

Project Link:
https://shazim-otp.github.io/jarvis/

GitHub Repository:
https://github.com/shazim-otp/jarvis

---
