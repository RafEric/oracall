import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle"; // adapte le chemin si besoin

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  // Appliquer le thème sur le html
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="bg-white shadow [@custom-variant:dark]:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl font-bold text-green-600">
          Recruit<span className="text-gray-900 [@custom-variant:dark]:text-white">Pro</span>
        </h1>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-8 text-gray-700 [@custom-variant:dark]:text-gray-200">
          <li className="hover:text-green-600 cursor-pointer">Accueil</li>
          <li className="hover:text-green-600 cursor-pointer">Offres</li>
          <li className="hover:text-green-600 cursor-pointer">Recruteurs</li>
          <li className="hover:text-green-600 cursor-pointer">Contact</li>
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <div className="flex items-center gap-4">
  <ThemeToggle />
  {/* Burger menu */}
</div>

          {/* Burger */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
          
        </div>
      </div>

      {/* Menu Mobile */}
      {open && (
        <div className="md:hidden px-6 pb-4 bg-white [@custom-variant:dark]:bg-gray-900">
          <ul className="flex flex-col gap-4 text-gray-700 [@custom-variant:dark]:text-gray-200">
            <li>Accueil</li>
            <li>Offres</li>
            <li>Recruteurs</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
      
    </nav>
  );
}
