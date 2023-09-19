import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Navbar = () => {
  const [isDarkMode, setDarkMode] = useState(true);
  return (
    <nav className="flex justify-between items-center h-[100px]">
      <h1 className={`font-extrabold tracking-[5px] text-[24px]`}>RAWG</h1>

      <DarkModeSwitch
        checked={isDarkMode}
        size="35px"
        onChange={() => {
          setDarkMode(!isDarkMode);
          document.documentElement.classList.toggle("dark");
        }}
      />
    </nav>
  );
};

export default Navbar;
