# YouTube Clone - React.js

A responsive YouTube clone built with React.js that replicates the core functionality of YouTube's user interface.

![YouTube Clone Preview](./src/assets/YouTube_icon.png)

## 📋 Features

- **Responsive Layout**: Works on desktop and mobile devices
- **Video Feed**: Grid layout for browsing videos
- **Video Player**: Watch videos with basic controls
- **Navigation**: Easy-to-use navigation between pages
- **Sidebar**: Quick access to different sections

## 🛠️ Tech Stack

- **Frontend**: React.js
- **Styling**: CSS3
- **Bundler**: Vite
- **State Management**: React Hooks (useState, useEffect, useContext)
- **Routing**: React Router DOM

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later) or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YashrajKamble/YouTube-Clone-By-React-JS.git
   cd YouTube-Clone-By-React-JS
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   
   The application will be available at `http://localhost:5173`

## 📂 Project Structure

```
src/
├── assets/            # Static assets (images, icons)
│
├── Components/        # Reusable UI components
│   ├── Feed/         # Video feed components
│   ├── Navbar/       # Navigation bar
│   ├── PlayVideo/    # Video player components
│   ├── Recommended/  # Recommended videos
│   └── Sidebar/      # Side navigation
│
├── Pages/            # Page components
│   ├── Home/         # Home page
│   └── Video/        # Video detail page
│
├── App.jsx           # Main application component
├── data.js           # Sample video data
└── main.jsx          # Application entry point
```

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- YouTube for the inspiration
- React and Vite teams for the amazing tools
- All open-source contributors whose code was used in this project
