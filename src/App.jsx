import {createBrowserRouter, createRoutesFromElements, Route,  RouterProvider} from 'react-router-dom';
import Navbar from './components/nav';
import Locker from './components/locker';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Navbar/>} >
        <Route index element={<Locker />}/>
        <Route path="/about" element={<About/>} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
      <Footer />
    </>
  )
}

export default App
