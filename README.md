# Dictionary Web App 📚

A modern, responsive dictionary application built with React and Tailwind CSS that allows users to search for word definitions, pronunciations, and more using the Free Dictionary API.


## 🚀 Features

- **Word Search**: Search for any word using the intuitive input field
- **Comprehensive Results**: Display definitions, phonetics, pronunciations, and examples from the Free Dictionary API
- **Audio Pronunciation**: Play audio pronunciation when available
- **Form Validation**: Smart validation with user-friendly error messages for empty searches
- **Typography Options**: Switch between three font families:
  - Serif (elegant and traditional)
  - Sans Serif (clean and modern)  
  - Monospace (code-friendly)
- **Theme Switching**: Toggle between light and dark themes
- **Responsive Design**: Optimal layout across all device sizes (mobile, tablet, desktop)
- **Interactive Elements**: Hover and focus states for enhanced user experience

## 🛠️ Built With

- **React** - Frontend framework
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Free Dictionary API** - Word definitions and pronunciations
- **Web Audio API** - Audio playbook functionality

## 🎯 Demo

[Live Demo](https://dictionary-two-phi.vercel.app/)



## 🚦 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/dictionary-app.git
   cd dictionary-app
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

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🏗️ Project Structure

```
DICT.../
├── node_modules/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── Components/
│   │   ├── Head.jsx
│   │   ├── Parts_of_speech.jsx
│   │   ├── Result_v1.jsx
│   │   ├── Result_v2.jsx
│   │   ├── Search_Field.jsx
│   │   ├── Switch.jsx
│   │   ├── useDebounce.jsx
│   │   └── Word_Result.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```


### Typography Classes Used
- **Serif**: `font-serif` - Classic and readable for traditional feel
- **Sans Serif**: `font-sans` - Modern and clean for contemporary look  
- **Monospace**: `font-mono` - Perfect for technical terms and code-like appearance

### Theme Implementation
- **Light Theme**: Default Tailwind colors with custom light backgrounds
- **Dark Theme**: `dark:` prefixed classes for dark mode styling
- **System Detection**: Uses `prefers-color-scheme` media query with JavaScript

### Responsive Breakpoints (Tailwind Default)
- **sm**: 640px and above
- **md**: 768px and above
- **lg**: 1024px and above
- **xl**: 1280px and above

## 🔧 API Integration

This app uses the [Free Dictionary API](https://dictionaryapi.dev/) to fetch word definitions and pronunciations.

**Example API endpoint:**
```
https://api.dictionaryapi.dev/api/v2/entries/en/{word}
```

### API Response Structure
```json
{
  "word": "example",
  "phonetics": [
    {
      "text": "/ɪɡˈzɑːmpəl/",
      "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/example-us.mp3"
    }
  ],
  "meanings": [
    {
      "partOfSpeech": "noun",
      "definitions": [
        {
          "definition": "A thing characteristic of its kind or illustrating a general rule.",
          "example": "it's a good example of how European action can produce results"
        }
      ],
      "synonyms": ["instance", "case", "illustration"]
    }
  ]
}
```

## 📦 Key Components


- **Head.jsx** - Header component with theme toggle and font selector
- **Search_Field.jsx** - Search input with form validation
- **Word_Result.jsx** - Main component displaying search results
- **Result_v1.jsx & Result_v2.jsx** - Different versions of result display
- **Parts_of_speech.jsx** - Component for displaying grammatical information
- **Switch.jsx** - Toggle switch component for themes
- **useDebounce.jsx** - Custom hook for debouncing search input


## 📱 Usage

1. **Search for a word**: Type any word in the search input and press Enter or click the search button
2. **Listen to pronunciation**: Click the play button next to phonetic transcriptions when audio is available
3. **Change font**: Use the font selector dropdown to switch between typography options
4. **Toggle theme**: Click the theme toggle button to switch between light and dark modes
5. **Responsive experience**: The app automatically adapts to your screen size using Tailwind's responsive utilities


## 🙏 Acknowledgments

- [Free Dictionary API](https://dictionaryapi.dev/) for providing the word definitions
- [Tailwind CSS](https://tailwindcss.com/) for the amazing utility-first CSS framework
- [React](https://reactjs.org/) for the powerful component-based architecture
- [Frontend Mentor](https://www.frontendmentor.io/) for the design inspiration



⭐ If you found this project helpful, please give it a star on GitHub!
