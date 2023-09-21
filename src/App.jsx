import "./App.css"

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
import Signuppage from "./pages/Signuppage"
import Homepage from "./pages/Homepage"
import Login from "./pages/Login";
import Contactpage from "./pages/Contactpage";
import Checkoutpage from "./pages/Checkoutpage";
import About from "./pages/About";



const router = createBrowserRouter(
  createRoutesFromElements(
    
      <>
      

     <Route
        path="/"
        element={<RootLayout/>}>
           
            <Route
              path="/"
              element={<Homepage />}
            ></Route>

            <Route
              path="/shop"
              element={<Product/>}
            ></Route>

            <Route
              path="/sign-up"
              element={<Signuppage/>}
            ></Route>
            <Route
              path="/login"
              element={<Login/>}
            ></Route>
            <Route
              path="/contacts"
              element={<Contactpage/>}
            ></Route>
            <Route
              path="/checkout"
              element={<Checkoutpage/>}
            ></Route>
            <Route
              path="/about"
              element={<About/>}
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
