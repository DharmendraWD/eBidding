// import React, { useEffect, useState } from 'react';
// import { FaMoon } from "react-icons/fa";
// import { IoSunnyOutline } from "react-icons/io5";

// function Theme() {
//   const [theme, setTheme] = useState("light");

//   useEffect(() => {
//     // Get stored theme on mount
//     const savedTheme = localStorage.getItem("theme") || "light";
//     setTheme(savedTheme);
//     document.body.setAttribute("data-theme", savedTheme);
//   }, []);

//   const toggleTheme = (e) => {
//     const newTheme = e.target.checked ? "dark" : "light";
//     setTheme(newTheme);
//     localStorage.setItem("theme", newTheme);
//     document.body.setAttribute("data-theme", newTheme);
//   };

//   return (
//     <div>
//       <input
//         type="checkbox"
//         onChange={toggleTheme}
//         id="theme"
//         checked={theme === "dark"}
//         className='hidden'
//       />
//       <label className='cursor-pointer' htmlFor="theme">{theme === "dark" ? <IoSunnyOutline /> : <FaMoon /> }</label>
//     </div>
//   );
// }

// export default Theme;
import React, { useEffect, useState, createContext, useContext } from 'react';
import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";

// 1. Create the context
export const ThemeContext = createContext();

// 2. Custom hook to use the context (optional, cleaner usage)
export const useTheme = () => useContext(ThemeContext);

// 3. Main Theme component that also provides context
function Theme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.body.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = (e) => {
    const newTheme = e.target.checked ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.setAttribute("data-theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div>
        <input
          type="checkbox"
          onChange={toggleTheme}
          id="theme"
          checked={theme === "dark"}
          className='hidden'
        />
        <label className='cursor-pointer' htmlFor="theme">
          {theme === "dark" ? <IoSunnyOutline /> : <FaMoon />}
        </label>
      </div>
    </ThemeContext.Provider>
  );
}

export default Theme;
