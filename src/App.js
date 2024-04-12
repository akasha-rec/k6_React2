import { BrowserRouter, Routes, Route } from "react-router-dom"; // 경로에 대한 정보 만들기
import { RecoilRoot } from "recoil";//recoil을 어디까지 쓸 것인지 범위
import Home from "./Component/Home";
import Login from "./Component/Login";
import Nav from "./Component/Nav";
import Subway from "./Component/Subway";

function App() {
  return (
    // 경로에 대한 정보 만들기
    <BrowserRouter>
      <RecoilRoot>
        {/* 모든 페이지에 공통적으로 나타나있을 컴포넌트 */}
        <div className="w-full h-screen max-w-screen-lg mx-auto">
          <div className="w-full">
            <Nav />
          </div>
          <div className="grow overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/subway" element={<Subway />} />
            </Routes>
          </div>
        </div>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
