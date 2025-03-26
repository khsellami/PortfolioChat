import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Works,
  SocialMedia,
  Services,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <ConfigProvider>
        <div className="w-full dark:bg-primary relative">
          <div className="fixed h-full flex  ml-[12%] z-50 items-end max-2xl:ml-[5%] bottom-5 ">
            <SocialMedia />
          </div>
          <Navbar />
          <main className="w-full relative">
            <div class="absolute inset-0 h-full w-full bg-white dark:bg-primary bg-[linear-gradient(to_right,#80808012_2px,transparent_1px),linear-gradient(to_bottom,#80808012_2px,transparent_1px)] bg-[size:30px_30px]" />
            <div className="w-full min-h-screen flex flex-col justify-center items-center mx-auto">
              <Hero />
              <About />
              <Experience />
              <Works />
              <Services />
              <Contact />
            </div>
          </main>
        </div>
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
