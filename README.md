# Random Joke App 😂

A React application that fetches and displays random jokes using Redux Toolkit for state management.

## Features

- 🎭 Fetch random jokes from an external API
- 🔄 Get new jokes with a single button click
- ⏳ Loading states while fetching jokes
- ❌ Error handling for failed API requests
- 💾 Persists the last fetched joke

## Technologies Used

- **React 19.2.0** - UI library
- **Redux Toolkit** - State management
- **React-Redux** - React bindings for Redux
- **Official Joke API** - Source of random jokes

## Project Structure

```
jokeapp/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── JokeApp.js        # Main joke display component
│   ├── redux/
│   │   ├── store.js          # Redux store configuration
│   │   └── jokeSlice.js      # Joke slice with async thunk
│   ├── App.js                # Root component
│   ├── index.js              # Entry point
│   └── index.css             # Global styles
└── package.json
```

## Installation

1. **Navigate to the project directory:**

   ```bash
   cd d:\react-beginner\jokeapp
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Install Redux dependencies (if not already installed):**
   ```bash
   npm install react-redux @reduxjs/toolkit
   ```

## Running the Application

1. **Start the development server:**

   ```bash
   npm start
   ```

2. **Open your browser:**
   The app will automatically open at [http://localhost:3000](http://localhost:3000)

## How It Works

### State Management

The app uses Redux Toolkit to manage the joke state:

- **currentJoke**: The currently displayed joke
- **lastJoke**: The last successfully fetched joke
- **loading**: Loading state indicator
- **error**: Error message if fetch fails

### API Integration

The app fetches jokes from the [Official Joke API](https://official-joke-api.appspot.com/):

- Endpoint: `https://official-joke-api.appspot.com/random_joke`
- Returns a joke with `setup` and `punchline` fields

### Components

**JokeApp Component:**

- Automatically fetches a joke on first load
- Displays loading state while fetching
- Shows error messages if fetch fails
- Provides a button to fetch new jokes

## Troubleshooting

### Blank Screen Issue

If you see a blank screen, make sure:

1. **Redux dependencies are installed:**

   ```bash
   npm install react-redux @reduxjs/toolkit
   ```

2. **Store is properly configured:**
   The store should wrap the reducer in an object with a `jokes` key:

   ```javascript
   export const store = configureStore({
     reducer: {
       jokes: jokeReducer, // ✓ Correct
     },
   });
   ```

3. **Development server is running:**
   ```bash
   npm start
   ```

### Common Issues

- **Module not found errors**: Run `npm install` to ensure all dependencies are installed
- **API errors**: Check your internet connection
- **Port already in use**: Stop other React apps or use a different port

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Runs the test suite
- `npm eject` - Ejects from Create React App (one-way operation)

## Future Enhancements

- [ ] Add joke categories
- [ ] Implement favorite jokes feature
- [ ] Add joke history
- [ ] Share jokes on social media
- [ ] Dark mode toggle
- [ ] Joke rating system

## License

This project was created for learning purposes as part of a React beginner tutorial series.

## API Reference

**Official Joke API:**

- Documentation: https://github.com/15Dkatz/official_joke_api
- No authentication required
- Free to use
