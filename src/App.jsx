import { Outlet } from "react-router-dom"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"
import Splash from "./components/Splash";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [isLoading, setIsLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
            // Após a duração de 0.5s de fadeout, remove o SplashScreen
            setTimeout(() => {
                setIsLoading(false);
            }, 500);
        }, 800);

        // Limpa o timer se o componente for desmontado antes
        return () => clearTimeout(timer);
    }, []);

  return (
    <>
      {isLoading && <Splash fadeOut={fadeOut} />}
      <ScrollToTop />
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}

export default App