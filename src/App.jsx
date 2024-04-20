import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Pricing from "./pages/pricing/Pricing";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout/>}>
          <Route path="/" element={<Home />}/>
          <Route path="/about us" element={<About />}/>
          <Route path="/pricing" element={<Pricing />}/>
      </Route>
    )
  );  

  return (
    <RouterProvider router={router}/>
  )
}

export default App
