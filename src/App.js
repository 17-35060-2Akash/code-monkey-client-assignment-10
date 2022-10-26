import { RouterProvider } from 'react-router-dom';
import { router } from './routes/route';
import toast, { Toaster } from 'react-hot-toast';
import './App.css';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
