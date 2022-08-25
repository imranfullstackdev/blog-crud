import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllBlogs from "./Component/AllBlogs";
import AddBlog from './Component/AddBlog'
import ViewBlog from "./Component/ViewBlog";

function App() {
  return (
    <>
    {/* <AddBlog/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllBlogs/>} />
          <Route path="AddBlog" element={<AddBlog/>} />
          <Route path="ViewBlog" element={<ViewBlog />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
