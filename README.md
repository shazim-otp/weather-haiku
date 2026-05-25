---

# Why I Built This

I built Mallu AI because I wanted to create my own real-time AI voice assistant inspired by Jarvis.
I was interested in combining speech recognition, AI APIs, and voice synthesis into a single assistant
that could interact naturally through conversation.

I also wanted to challenge myself by building the project on a low-end laptop using lightweight tools
and cloud-based AI inference for fast responses.

Another goal was to make the assistant support
- English
- Malayalam
- Manglish

since most voice assistants do not properly support regional language conversations.

This project helped me better understand
- AI API integration
- Speech recognition
- Real-time audio processing
- Voice synthesis
- Multithreading in Python
- Conversational AI systems

---

# Challenges Faced

Some challenges while building this project included

- Reducing AI response delay
- Handling microphone background noise
- Preventing false speech detections
- Supporting Malayalam and Manglish conversations
- Managing real-time interruption while speaking
- Creating smooth wake-word activation
- Running AI efficiently on low-end hardware

---

# What I Learned

During this project I learned how to

- Use Groq AI APIs for fast AI responses
- Implement speech-to-text using Faster-Whisper
- Generate realistic AI voice using Edge-TTS
- Process microphone audio in real time
- Build multilingual conversational systems
- Use threading for interruption handling
- Create idle-mode and wake-word systems

---

# How to Customize

You can customize the assistant easily by

- Changing the AI personality inside `meck.py`
- Using different Edge-TTS voices
- Modifying the wake word
- Adding new automation features
- Connecting ESP32 or IoT devices
- Adding GUI animations and effects
- Changing response styles and memory behavior

---

# Local Development

To edit the project locally

1. Clone the repository
2. Open the folder in VS Code
3. Create a virtual environment
4. Install dependencies
5. Edit:
   - `meck.py`
6. Run using

```bash
py -3.11 meck.py
```

---

# Hardware Requirements

This project was designed to run on low-end hardware and does not require:
- Dedicated GPU
- Expensive AI hardware
- Local large language models

Minimum requirements
- Intel i3 processor
- 4GB RAM
- Integrated graphics
- Internet connection

---

# Performance

The project uses
- Cloud AI inference through Groq
- Lightweight local speech recognition
- Optimized audio processing

This allows the assistant to provide
- Low-latency responses
- Fast startup
- Smooth performance on low-end systems

---

---

# System Architecture

```text
User Voice
    ↓
Microphone Input
    ↓
Faster-Whisper Speech Recognition
    ↓
Groq AI Processing
    ↓
AI Response Generation
    ↓
Edge-TTS Voice Synthesis
    ↓
Speaker Output
```

---

# Features

- Real-time voice interaction
- AI-generated conversational responses
- English, Malayalam, and Manglish support
- Wake-word activation
- Interrupt current response while speaking
- Idle listening mode
- Conversation memory
- Realistic neural voice output
- Smart silence detection
- Low-latency cloud AI processing

---

# Technologies Used

| Technology | Purpose |
|---|---|
| Python 3.11 | Main programming language |
| Groq API | AI response generation |
| Faster-Whisper | Speech-to-text |
| Edge-TTS | Text-to-speech |
| Pygame | Audio playback |
| NumPy | Audio processing |
| SoundDevice | Microphone recording |
| SciPy | WAV audio handling |

---

# Installation

## Clone Repository

```bash
git clone https://github.com/shazim-otp/jarvis.git
cd jarvis
```

---

## Create Virtual Environment

### Windows

```bash
py -3.11 -m venv venv
venv\Scripts\activate
```

### Linux

```bash
python3.11 -m venv venv
source venv/bin/activate
```

---

## Install Dependencies

```bash
pip install openai faster-whisper edge-tts pygame numpy sounddevice scipy
```

Optional:

```bash
pip uninstall pygame
pip install pygame-ce
```

---

# Setup Groq API

1. Visit:
https://console.groq.com/keys

2. Create a new API key

3. Replace inside `meck.py`:

```python
api_key="YOUR_GROQ_API_KEY"
```

with your actual API key.

---

# Running The Project

```bash
py -3.11 meck.py
```

---

# Example Commands

## English

```text
What is artificial intelligence?
```

## Malayalam

```text
ഇന്നത്തെ കാലാവസ്ഥ എന്താ?
```

## Manglish

```text
entha cheyyunne bro
```

---

# Project Structure

```text
jarvis/
│
├── meck.py
├── click.mp3
├── input.wav
├── interrupt.wav
├── wake.wav
├── README.md
└── venv/
```

---

# Future Improvements

Planned future upgrades include:

- Desktop GUI
- ESP32 smart-home integration
- Face recognition
- Camera vision support
- Emotion-aware responses
- Mobile companion app
- Offline AI mode
- Smart automation controls

---

# Hardware Used

This project was developed on:

- Intel i3 processor
- 4GB RAM
- Integrated Intel HD Graphics

The assistant was optimized specifically for low-end hardware.

---

# Demo

Demo URL:
[(Add your demo link here)](https://shazim-otp.github.io/jarvis/)

GitHub Repository:
https://github.com/shazim-otp/jarvis

---
