# BrainFuel — Daily Challenge (Front-end only)

Light, fun React app (Vite + Tailwind) that gives a new daily challenge each morning. Built to be run locally — no backend.

## ✨ Features
- One challenge per local day (stored in localStorage)
- **90 total challenges**: 30 easy, 30 medium, 30 hard
- **4 categories**: Fitness, Creativity, Productivity, Chaos
- **Card flip reveal**: Challenge starts hidden, click to reveal
- **Shuffle animation**: Smooth card shuffle when generating new challenges
- Timer or checklist challenges with progress tracking
- Mark as done → updates streak with fire emoji 🔥
- "Generate a new one" for chaotic users
- Animated confetti + success sound on completion
- Customizable preferences (difficulty + categories)
- **Beautiful UI**: Gradients, animations, glassmorphism, badges
- Responsive design with collapsible preferences

## 🎨 UI Highlights
- **Card flip mechanic**: Challenge hidden until revealed (adds anticipation!)
- **Shuffle animation**: Visual feedback when generating new challenges
- **Gradient backgrounds** with smooth color transitions
- **Animated header** with floating logo effect
- **Category & difficulty badges** with color coding
- **Progress bars** for timer and checklist challenges
- **Glass morphism** card design with backdrop blur
- **Smooth animations**: slide-in, pulse-glow, flip, shuffle, hover effects
- **Enhanced confetti** with shapes, rotation, and Web Audio sound
- **Collapsible preferences** panel to reduce clutter

## Quick start (Windows PowerShell)

1. Install dependencies

```powershell
cd 's:/BrainFuel'
npm install
```

2. Run dev server

```powershell
npm run dev
```

Open the URL printed by Vite (usually http://localhost:5173).

## Challenge Breakdown

### Easy (30 challenges)
- 10 Fitness (jumping jacks, stretches, walks, planks, etc.)
- 10 Creativity (doodles, haikus, simple writing, photos)
- 5 Productivity (clear tabs, organize desktop, delete emails)
- 5 Chaos (memes, silly accents, weird faces)

### Medium (30 challenges)
- 10 Fitness (20 squats, 45s plank, lunges, dancing)
- 10 Creativity (200-word stories, self-portraits, poems, logos)
- 5 Productivity (Pomodoro, declutter, meal planning)
- 5 Chaos (rhyming, photo walks, desk rearranging)

### Hard (30 challenges)
- 10 Fitness (50 squats, 2-min plank, burpees, 15-min cardio)
- 10 Creativity (500+ word stories, detailed art, comic strips)
- 5 Productivity (inbox zero, deep cleaning, monthly planning)
- 5 Chaos (magic tricks, TikTok videos, juggling)

## Notes
- This scaffold uses Vite + React + Tailwind. If you prefer a CDN build (no install), I can provide a single-file alternative.
- If `npm install` fails because of network restrictions, tell me and I can provide a prebuilt bundle or a simplified CDN-based single-file app.
- Challenges are filtered by both **difficulty** and **category** based on your preferences.
