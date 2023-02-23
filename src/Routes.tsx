import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Changelog = React.lazy(() => import("pages/Changelog"));
const Licenses = React.lazy(() => import("pages/Licenses"));
const PasswordProtected = React.lazy(() => import("pages/PasswordProtected"));
const Page = React.lazy(() => import("pages/Page"));
const SingleProductOne = React.lazy(() => import("pages/SingleProductOne"));
const SingleProduct = React.lazy(() => import("pages/SingleProduct"));
const Store = React.lazy(() => import("pages/Store"));
const AbouttheAuthor = React.lazy(() => import("pages/AbouttheAuthor"));
const Home1 = React.lazy(() => import("pages/Home1"));
const Blog = React.lazy(() => import("pages/Blog"));
const Contact = React.lazy(() => import("pages/Contact"));
const BlogSingle = React.lazy(() => import("pages/BlogSingle"));
const StyleGuide = React.lazy(() => import("pages/StyleGuide"));
const Thumbail = React.lazy(() => import("pages/Thumbail"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/thumbail" element={<Thumbail />} />
          <Route path="/styleguide" element={<StyleGuide />} />
          <Route path="/blogsingle" element={<BlogSingle />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/abouttheauthor" element={<AbouttheAuthor />} />
          <Route path="/store" element={<Store />} />
          <Route path="/singleproduct" element={<SingleProduct />} />
          <Route path="/singleproductone" element={<SingleProductOne />} />
          <Route path="/page" element={<Page />} />
          <Route path="/passwordprotected" element={<PasswordProtected />} />
          <Route path="/licenses" element={<Licenses />} />
          <Route path="/changelog" element={<Changelog />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
