import { useEffect, useState } from "react";
import About from "./partials/About";
import Blog from "./partials/Blog";
import Contact from "./partials/Contact";
import Experience from "./partials/Experience";
import Footer from "./partials/Footer";
import Gallery from "./partials/Gallery";
import Header from "./partials/Header";
import Home from "./partials/Home";
import Portofolio from "./Portofolio";

function App() {
  const [showToTopButton, setShowToTopButton] = useState(false);

  useEffect(() => {

    document.documentElement.classList.add('scroll-smooth');

    // Mengatur tema saat pertama kali aplikasi dimuat
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Menampilkan tombol "to top" saat scroll
    const handleScroll = () => {
      setShowToTopButton(window.pageYOffset > 300); // Menampilkan tombol saat posisi scroll > 300px
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  useEffect(() => {
    

    return () => {
      document.documentElement.classList.remove('scroll-smooth');
    };

  }, []);

  return (
    <>
      <Header />
      <Home />
      <About />
      <Portofolio />
      <Experience />
      <Blog />
      <Gallery />
      <Contact />
      <Footer />

      {showToTopButton && (
        <a
          href="#home"
          className="fixed z-[9999] bottom-4 right-4 p-4 flex justify-center items-center h-14 w-14 bg-primary rounded-full hover:animate-pulse"
          id="to-top"
        >
          <span className="block w-5 h-5 border-t-2 border-l-2 rotate-45 mt-2" />
        </a>
      )}
    </>
  );
}

export default App;
