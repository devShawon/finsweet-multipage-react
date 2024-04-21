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
import Feature from "./pages/feature/Feature";
import Blog from "./pages/blog/Blog";
import ReadBlog from "./pages/readBlog/ReadBlog";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout/>}>
          <Route path="/" element={<Home />}/>
          <Route path="/about us" element={<About />}/>
          <Route path="/pricing" element={<Pricing />}/>
          <Route path="/feature" element={<Feature />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/blog/read blog" element={<ReadBlog />} />
      </Route>
    )
  );  

  return (
    <RouterProvider router={router}/>
  )
}

export default App
