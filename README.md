# 🌾 Anndaan — Smart Food Waste Reduction Platform

> **"Anndaan"** — derived from the Sanskrit word meaning *"Donation of Food"*. A platform that connects surplus food donors with those who need it most, powered by AI prediction and real-time GPS matching.

---

## 🚀 Live Demo

Open `index.html` directly in any browser — **no server or installation required!**

---

## 🧩 The Problem

Every day, restaurants, supermarkets, and households discard thousands of kilograms of perfectly edible food while millions go hungry. The gap between **surplus** and **need** exists not because of scarcity, but because of a lack of real-time connection and logistics.

**Anndaan bridges that gap.**

---

## 💡 Solution Overview

Anndaan is a **Smart Food Waste Reduction Platform** that:

- Enables **food donors** (restaurants, households, retailers) to instantly list surplus food with GPS-tagged locations
- Connects them with **NGOs, shelters, and community receivers** in real time
- Uses **AI-based prediction** to help donors anticipate surplus before it happens
- Coordinates **volunteer delivery** to handle last-mile logistics

---

## 🏗️ System Architecture

```
┌──────────────┐      GPS Match      ┌──────────────────┐
│   Donor      │ ──────────────────► │   Live Feed DB   │
│ (Restaurant) │                     │  (mockFoodFeed)  │
└──────────────┘                     └────────┬─────────┘
                                              │ Notify
                                     ┌────────▼─────────┐
                                     │   NGO / Receiver  │
                                     └────────┬─────────┘
                                              │ Dispatch
                                     ┌────────▼─────────┐
                                     │  Volunteer Hub    │
                                     └──────────────────┘
```

---

## 📱 Pages / Features

### 1. 🏠 Home Page
- Mission-driven hero section
- Global impact counter (Meals Rescued, CO₂ Saved)
- AI Analytics preview widget
- Quick-action CTAs for Donors and NGOs

### 2. 📡 Live Surplus Feed
- Real-time grid of available food donations
- Food condition tags: `Fresh` / `Cooked` / `Packaged`
- Urgency badges for items expiring soon
- Distance, quantity, and expiry info per listing
- **"Use My Location"** button using browser GPS

### 3. 🍴 Donor Innovation Hub
- **Add surplus food form** with:
  - Food title, category, quantity, expiry
  - Automatic GPS coordinates attached on submit
- **AI Forecast Widget** — predicts expected nightly surplus with tips
- **Impact Dashboard** — CO₂ prevented, meals donated, estimated tax deductions

### 4. 🤝 NGO / Receiver View
- GPS map view showing all active donations nearby
- Urgent pickup list with one-click claim
- "Call Volunteer Delivery" button to dispatch a driver

### 5. 🚴 Volunteer Delivery Hub *(Unique!)*
- Active logistics task board (pickup + dropoff locations)
- Accept task → live notification sent to receiver
- **Hero Status** gamification: deliveries count, distance covered, rank badge

---

## ⚙️ Key Technical Features

| Feature | Technology Used |
|---|---|
| GPS Location | HTML5 `navigator.geolocation` API |
| Real-Time Notifications | Custom Toast Notification System |
| Single-Page Routing | Vanilla JavaScript DOM manipulation |
| Responsive Layout | CSS Grid + Flexbox |
| Modern UI | Glassmorphism, CSS Variables, Animations |
| Icons | [Phosphor Icons](https://phosphoricons.com/) CDN |
| Fonts | Google Fonts — Outfit + Plus Jakarta Sans |

---

## 🌐 Real-World Flow

```
1. Donor lists food  →  GPS attaches location  →  Feed goes live
2. NGO sees nearby food  →  Clicks "Reserve"
3. Toast Notification fires → Donor is notified ("Your food was claimed!")
4. Volunteer accepts task → Picks up food → Delivers to NGO
5. NGO receives confirmation notification → Confirms collection
```

---

## 🧠 AI Module (Prediction)

The AI Forecast panel predicts nightly surplus based on:
- Past sales history & day-of-week patterns
- Local events and seasons
- Real-time demand signals

> **Example Output:** *"You'll likely have 24 extra meals tonight (89% confidence). Tip: Reduce prep by 10% based on last Friday's data."*

---

## 🌱 Innovation Highlights

- 🏆 **Surplus Score** — Gamified donor ranking to encourage consistent donations
- 🌿 **CO₂ Counter** — Shows environmental impact of each donation in real time
- 🧾 **Tax Benefit Estimator** — Shows approximate tax deduction eligibility for donors
- 🌍 **Multi-language ready** — Architecture supports i18n for regional languages (Hindi, Tamil, etc.)
- 🚴 **Volunteer Reward System** — Points and hero badges for delivery volunteers

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Vanilla HTML5, CSS3, JavaScript (ES6+) |
| Styling | Custom CSS — Glassmorphism, Animations |
| Icons | Phosphor Icons (CDN) |
| Fonts | Google Fonts (CDN) |
| Maps (planned) | Google Maps API / Mapbox |
| Backend (planned) | Node.js + Express |
| Database (planned) | MongoDB / PostgreSQL |
| AI/ML (planned) | Python — scikit-learn / time-series |
| Notifications (planned) | Firebase Cloud Messaging |

---

## 📁 Project Structure

```
food-waste-platform/
│
├── index.html              # Main SPA entry point
│
├── css/
│   ├── variables.css       # Design system: colors, spacing, fonts
│   ├── style.css           # Global layout and component styles
│   └── toast.css           # Toast notification styles
│
└── js/
    ├── data.js             # Mock data (food feed, AI insights)
    └── app.js              # SPA routing, view renderers, GPS + notification logic
```

---

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Edge, Safari)
- No Node.js, npm, or build tools required!

### Run Locally

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/anndaan.git

# Navigate to the project folder
cd anndaan/food-waste-platform

# Open in browser
# Simply double-click index.html
# OR right-click → Open with → Your Browser
```

---

## 🔮 Roadmap (Post-Hackathon)

- [ ] Backend API (Node.js/Express)
- [ ] Real database integration (MongoDB)
- [ ] Firebase real-time push notifications
- [ ] Google Maps live GPS map integration
- [ ] Trained ML model for surplus prediction
- [ ] PWA (Progressive Web App) for mobile install
- [ ] Multi-language support (Hindi, Tamil, Bengali)
- [ ] Donor tax benefit auto-report generation

---

## 👩‍💻 Team

Built with ❤️ for a hackathon — solving a real-world food waste crisis.

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

- [Phosphor Icons](https://phosphoricons.com/) for beautiful open icons
- [Google Fonts](https://fonts.google.com/) for Outfit & Plus Jakarta Sans
- [Unsplash](https://unsplash.com/) for open-use food photography

---

> *"One person's surplus is another person's sustenance. Anndaan makes that connection instant."*
