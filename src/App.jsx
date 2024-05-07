
import './App.css'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import NotFound from './components/NotFound/NotFound'


const routers = createHashRouter([
  {path : '' , element : <Layout/> , children :[
    {index : true , element : <Home/>},
    {path: 'about' , element : <About/>},
    {path: '*' , element : <NotFound/>},
  ]}
])
function App() {

  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  )
}

export default App
