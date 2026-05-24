#  Weather Haiku

A weather-based poetry website that generates a unique haiku depending on the current weather in your location.

The website automatically detects the weather using a free weather API and displays a matching haiku with a dynamic background theme. Every refresh can generate a different poem, making the experience feel fresh each time.

---

##  Features

-  Detects your current location
-  Fetches live weather data using an API
-  Generates weather-based haikus
-  Dynamic background themes
-  Responsive design for mobile and desktop
-  Lightweight and fast
-  Random haiku generation on each reload
-  Glassmorphism-style UI

---

#  Built With

- **HTML5**
- **CSS3**
- **JavaScript**
- **Open-Meteo API**

---

#  Project Structure

```bash
weather-haiku/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

#  How It Works

### 1. Location Access
The browser asks permission to access the user's location.

### 2. Weather Fetching
The app sends the latitude and longitude to the Open-Meteo API.

### 3. Weather Detection
The returned weather code is checked to identify conditions like:
- Sunny
- Rainy
- Cloudy
- Snowy

### 4. Haiku Generation
A random haiku related to the detected weather is selected and displayed.

### 5. Dynamic UI
The background color and overall mood of the page change based on the weather condition.

---

#  Supported Weather Conditions

| Weather | Theme |
|---|---|
| Sunny | Warm and bright |
| Rainy | Calm and emotional |
| Cloudy | Soft and dreamy |
| Snowy | Peaceful and quiet |

---

#  API Used

## Open-Meteo API

Free weather API with no authentication required.

```bash
https://open-meteo.com/
```

The project uses:
- Current weather data
- Weather condition codes
- Temperature data

---

#  Getting Started

## Clone the Repository

```bash
git clone https://github.com/yourusername/weather-haiku.git
```

---

## Open the Project

```bash
cd weather-haiku
```

---

## Run the Website

Simply open:

```bash
index.html
```

in your browser.

No installation or build tools are required.

---

#  UI Design

The interface uses:
- Gradient backgrounds
- Blur effects
- Rounded cards
- Minimal layout
- Smooth transitions

The theme changes automatically based on weather conditions.

---

#  Responsive Design

The website is optimized for:
- Desktop
- Tablet
- Mobile devices

---

#  What You Can Learn From This Project

This project is useful for learning:

- Working with APIs
- Fetching JSON data
- Async JavaScript (`fetch`, `async/await`)
- Browser geolocation
- DOM manipulation
- Responsive web design
- Dynamic styling

---

#  Future Improvements

Some ideas for future updates:

- AI-generated haikus
- Weather animations (rain, snow, clouds)
- Background music or ambience
- Search weather by city
- Save favorite haikus
- Multi-language support
- Voice narration using text-to-speech

---

#  Example Haiku

```text
Clouds drift through the sky
Cold wind whispers through the trees
Evening fades to blue
```

---

# Contributing

Contributions are welcome.

If you want to improve the project:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

---

# License

This project is licensed under the MIT License.

---

#  Author

### shazim

Tech projects, robotics, creative coding, and futuristic web experiences.

---

# Support

If you liked this project:
- Give it a star on GitHub
- Share it with others
- Try adding your own haikus

---
