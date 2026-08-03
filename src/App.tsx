import { HashRouter, Routes, Route} from "react-router-dom"
import { useEffect, useState } from "react"
import { Home } from "./pages/home.tsx"
import MobileHome from "./pages/MobileHome.tsx"
import { Page1 } from "./pages/page1.tsx" 
import { Page2 } from "./pages/page2.tsx"
import { Page3 } from "./pages/page3.tsx"
import MobilePage1 from "./pages/MobilePage1.tsx"
import MobilePage2 from "./pages/MobilePage2.tsx"
import MobilePage3 from "./pages/MobilePage3.tsx"
import { About } from "./pages/about.tsx"
import './App.css'
import { Info1 } from "./pages/info1.tsx"

function App() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
     <main className="container bg-white font-primary w-full max-w-full overflow-x-hidden">
        
      <HashRouter>
        <div>
          <Routes>
            <Route path="/" element={isMobile ? <MobileHome /> : <Home />}></Route>
            <Route path="/page1" element={isMobile ? <MobilePage1 /> : <Page1 />}></Route>
            <Route path="/page2" element={isMobile ? <MobilePage2 /> : <Page2 />}></Route>
            <Route path="/page3" element={isMobile ? <MobilePage3 /> : <Page3 />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/info1" element={<Info1 />}></Route>
          </Routes>
        </div>
      </HashRouter>
   

    </main>
    </>
  )
}

export default App
