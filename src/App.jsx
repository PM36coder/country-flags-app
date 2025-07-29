
import './App.css'
import { LayOut } from './Layout/LayOut';
import { Country } from './components/Country';
import { Contact } from './components/Contact';
import { About } from './components/About';
import { Home } from './components/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CountryDetails } from './Layout/CountryDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/country", element: <Country /> },
        {path: "/country/:id", element: <CountryDetails />}
      ],
    },
  ]);
  

  return (
    <>
    <RouterProvider router={router}/>
    
    </>
  )
}

export default App
