import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Root from "./components/Root/Root";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Articles from "./components/Articles/Articles";
import SingleArticle from "./components/Articles/SingleArticle";

import IntroPage from "./components/Intro/IntroPage/IntroPage";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<IntroPage />} />
        <Route path="About-Me" element={<AboutMe />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Projects" element={<Projects />} />

        <Route path="Articles" element={<Articles />} />
        <Route path="Articles/:title" element={<SingleArticle />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
