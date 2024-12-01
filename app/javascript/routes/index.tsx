import React from "react";
import { BrowserRouter as Router, Routes, Route, useRoutes } from "react-router-dom";
import Home from "../components/Home";
import BookCardList from "frontend/components/BookCardList";
import BookPage from "frontend/components/BookPage";

const AppRoute = (): React.ReactElement<
  any,
  string | React.JSXElementConstructor<any>
> | null => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    {path: '/books/:id', element: <BookPage /> },
    { path: '/books', element: <BookCardList /> },
    { path: '*', element: <Home /> },
  ]);
  return routes;
};

export default (
  <Router>
    <AppRoute />
  </Router>
);
