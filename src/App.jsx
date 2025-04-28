//! Router-Provider
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//! Layout
import Rootlayout from './components/layout/Rootlayout/Rootlayout';
//! Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';
import "./App.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App