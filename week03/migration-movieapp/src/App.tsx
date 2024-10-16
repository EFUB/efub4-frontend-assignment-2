import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import GlobalStyle from "./components/GlobalStyle";
import {GlobalStyleProps} from "./types/globalStyleProps";
import {RootState} from "./redux/store";

function App() {
  // useSelector 현재 상태 받아오기
  const lightMode = useSelector((state: RootState) => state.isLightMode);

  return (
    <>
      <GlobalStyle isLightMode={lightMode as GlobalStyleProps["isLightMode"]}/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </>
  );
}

export default App;
