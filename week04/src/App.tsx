import FavoritePage from "page/FavoritePage";
import MainPage from "page/MainPage";
import { Route, Routes } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/favorites" element={<FavoritePage />} />
      <Route path="*" element={<h1>404 NOT FOUND</h1>} />
    </Routes>
  );
}

export default App;
