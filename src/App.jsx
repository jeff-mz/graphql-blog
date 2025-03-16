import Index from "./components/layout/Index";
import HomePage from "./components/home/HomePage";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import SingleArticle from "./components/articles/SingleArticle";
import AuthorPage from "./components/authors/AuthorPage";

const App = () => {
  return (
    <Index>
      {/* <HomePage /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:slug" element={<SingleArticle />} />
        <Route path="/author/:slug" element={<AuthorPage />} />
      </Routes>
    </Index>
  );
};

export default App;
