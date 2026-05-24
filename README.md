# Weather Haiku

A weather-based poetry website that generates a unique haiku depending on the current weather in your location.

The website automatically detects the weather using a free weather API and displays a matching haiku with a dynamic background theme. Every refresh can generate a different poem, making the experience feel fresh each time.

---

## Features

- Detects your current location
- Fetches live weather data using an API
- Generates weather-based haikus
- Dynamic background themes
- Responsive design for mobile and desktop
- Lightweight and fast
- Random haiku generation on each reload
- Glassmorphism-style UI
- Displays current temperature
- Different moods for different weather conditions
- No backend required
- No API key required

---

# Built With

- HTML5
- CSS3
- JavaScript
- Open-Meteo API

---

# Project Structure

```bash
weather-haiku/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

# How It Works

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

# Supported Weather Conditions

| Weather | Theme |
|---|---|
| Sunny | Warm and bright |
| Rainy | Calm and emotional |
| Cloudy | Soft and dreamy |
| Snowy | Peaceful and quiet |

---

# API Used

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

# Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/yourusername/weather-haiku.git
```

---

## 2. Open the Project Folder

```bash
cd weather-haiku
```

---

## 3. Run the Website

You can run the project in different ways.

### Method 1 — Open Directly
Open the `index.html` file in your browser.

```bash
index.html
```

---

### Method 2 — Using VS Code Live Server

Recommended for development.

#### Steps:
1. Open the project in VS Code
2. Install the Live Server extension
3. Right click `index.html`
4. Click `Open with Live Server`

The website will open automatically in your browser.

---

### Method 3 — Using Python Local Server

If Python is installed:

```bash
python -m http.server
```

Then open:

```bash
http://localhost:8000
```

---

# Requirements

You only need:
- A modern browser
- Internet connection
- Location permission enabled

Works on:
- Chrome
- Edge
- Firefox
- Brave

---

# Responsive Design

The website is optimized for:
- Desktop
- Tablet
- Mobile devices

---

# UI Design

The interface uses:
- Gradient backgrounds
- Blur effects
- Rounded cards
- Minimal layout
- Smooth transitions
- Dynamic weather themes

The mood of the UI changes depending on the weather condition.

---

# What You Can Learn From This Project

This project is useful for learning:

- Working with APIs
- Fetching JSON data
- Async JavaScript (`fetch`, `async/await`)
- Browser geolocation
- DOM manipulation
- Responsive web design
- Dynamic styling
- Weather condition handling

---

# Screenshots

You can add screenshots here later.

Example:

```bash
screenshots/
```

---

# Deployment

You can deploy this project for free on:

- GitHub Pages
- Netlify
- Vercel
- Render

---

## Deploy on GitHub Pages

1. Push the project to GitHub
2. Go to repository settings
3. Open `Pages`
4. Select the main branch
5. Save

Your site will be live in a few seconds.

---

# Future Improvements

Some ideas for future updates:

- AI-generated haikus
- Weather animations (rain, snow, clouds)
- Background music or ambience
- Search weather by city
- Save favorite haikus
- Multi-language support
- Voice narration using text-to-speech
- Animated transitions
- Dark mode toggle
- Weather icons

---

# Example Haiku

```text
Clouds drift through the sky
Cold wind whispers through the trees
Evening fades to blue
```

---

# Common Issues

## Location Permission Denied

If location access is denied:
- The app may use default weather data
- Enable location permission in browser settings

---

## Weather Not Loading

Make sure:
- Internet connection is active
- Browser supports geolocation
- API is reachable

---

# Contributing

Contributions are welcome.

If you want to improve the project:

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push to GitHub

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# License

This project is licensed under the MIT License.

---

# Author

### shazim

Tech projects, robotics, creative coding, and futuristic web experiences.

---

# Support

If you liked this project:
- Give it a star on GitHub
- Share it with others
- Try adding your own haikus

---

# Final Note

This project combines weather data with creative poetry to make a small interactive experience using only frontend technologies.
