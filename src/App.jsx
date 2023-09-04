import "./App.css"
import Image from "./components/Image"
import List from "./components/List"
import img from "./assets/img1.webp"
import Facilities from "./components/Facilities"
import SubHeading from "./components/SubHeading"
import PortionHeading from "./components/PortionHeading"
import Button from "./components/Button"

import Flex from "./components/Flex"

import Footer from "./components/layout/Footer"
import Slid from "./components/slid"
import Container from "./components/Container"
import Product from "./components/Product"

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Link,
} from "react-router-dom";
import RootLayout from "./components/RootLayout"
import Errorpage from "./pages/Errorpage"


const router = createBrowserRouter(
  createRoutesFromElements(
    
      <>

     <Route
        path="/"
        element={<RootLayout/>}>
           
            <Route
              path="/"
              element={<Facilities />}
            ></Route>

            <Route
              path="/abrar"
              element={<Product/>}
            ></Route>

            <Route
              path="/abrar/rahi"
              element={<Slid/>}
            ></Route>

            <Route
              path="*"
              element={<Errorpage/>}
            ></Route>
      </Route>

      
      
      </>
    
  )
);


function App() {
  
  
  

  return (
    <>
    
    <RouterProvider router={router} />
    
    
        
    </>
  )
}

export default App
