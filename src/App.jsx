import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import ProjectDetail from "./components/ProjectDetail"; // 새로 추가할 컴포넌트

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Routes>
          {/* 메인 페이지 */}
          <Route
            path="/"
            element={
              <div>
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                  <Navbar />
                  <Hero />
                </div>
                <About />
                <Experience />
                <Works />
                <Tech />

                <div className="relative z-0">
                  <Contact />
                  <StarsCanvas />
                </div>
              </div>
            }
          />
          {/* 상세 페이지 */}
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
