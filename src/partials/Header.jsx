import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
  const [isFixedNav, setIsFixedNav] = useState(false);
  
  const menuRef = useRef(null); // Reference untuk menu
  const hamburgerRef = useRef(null); // Reference untuk tombol hamburger

  const toggleHamburger = () => setIsMenuOpen((prev) => !prev);

  const handleDarkModeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      setIsFixedNav(window.pageYOffset > header.offsetTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  useEffect(() => {
    // Menutup menu saat mengklik di luar area menu
    const handleClickOutside = (event) => {
      if (
        menuRef.current && !menuRef.current.contains(event.target) &&
        hamburgerRef.current && !hamburgerRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`bg-transparent absolute top-0 left-0 w-full flex items-center z-10 ${
        isFixedNav ? "navbar-fixed" : ""
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a href="#home" className="font-bold text-3xl text-primary block py-6 uppercase">
              MDN
            </a>
          </div>
          <div className="flex items-center px-4">
            <button
              ref={hamburgerRef} // Assign ref untuk tombol hamburger
              id="hamburger"
              type="button"
              className={`block absolute right-4 lg:hidden ${
                isMenuOpen ? "hamburger-active" : ""
              }`}
              onClick={toggleHamburger}
            >
              <span className="hamburger-line transition duration-300 ease-in-out origin-top-left" />
              <span className="hamburger-line transition duration-300 ease-in-out" />
              <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left" />
            </button>

            <nav
              id="nav-menu"
              ref={menuRef} // Assign ref untuk menu
              className={`absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none ${
                isMenuOpen ? "" : "hidden"
              } dark:bg-dark dark:shadow-slate-800 lg:dark:bg-transparent`}
            >
              <ul className="block lg:flex">
                {["Home", "About", "Portofolio", "Experience", "Blog", "Gallery", "Contact"].map((item, index) => (
                  <li className="group" key={index}>
                    <a
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white"
                    >
                      {item}
                    </a>
                  </li>
                ))}
                <li className="flex items-center pl-8 mt-3 lg:mt-0">
                  <div className="flex">
                    <span className="mr-2 text-sm text-slate-500">Light</span>
                    <input
                      type="checkbox"
                      className="hidden"
                      id="dark-toggle"
                      checked={isDarkMode}
                      onChange={handleDarkModeToggle}
                    />
                    <label htmlFor="dark-toggle">
                      <div className="flex h-5 w-9 cursor-pointer items-center rounded-full bg-slate-500 p-1">
                        <div className="toggle-circle h-4 w-4 rounded-full bg-white transition duration-300 ease-in-out" />
                      </div>
                    </label>
                    <span className="ml-2 text-sm text-slate-500">Dark</span>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
