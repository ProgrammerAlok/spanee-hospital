import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ContactUs = React.lazy(() => import("pages/ContactUs"));
const Team = React.lazy(() => import("pages/Team"));
const TeamOne = React.lazy(() => import("pages/TeamOne"));
const BlogOne = React.lazy(() => import("pages/BlogOne"));
const Blog = React.lazy(() => import("pages/Blog"));
const Gallery = React.lazy(() => import("pages/Gallery"));
const Services = React.lazy(() => import("pages/Services"));
const AboutUS = React.lazy(() => import("pages/AboutUS"));
const Slide169One = React.lazy(() => import("pages/Slide169One"));
const Frame6415 = React.lazy(() => import("pages/Frame6415"));
const Home1 = React.lazy(() => import("pages/Home1"));


const ProjectRoutes = () => {

  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/frame6415" element={<Frame6415 />} />
          <Route path="/slide169one" element={<Slide169One />} />
          <Route path="/aboutus" element={<AboutUS />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogone" element={<BlogOne />} />
          <Route path="/teamone" element={<TeamOne />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
