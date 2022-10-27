import { RouterProvider } from 'react-router-dom';
import { router } from './routes/route';
import toast, { Toaster } from 'react-hot-toast';
import './App.css';
import { createContext } from 'react';
import { useState } from 'react';

export const ThemeContext = createContext(null);


function App() {
  const [theme, setTheme] = useState('light');


  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <RouterProvider router={router}></RouterProvider>
        <Toaster />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
