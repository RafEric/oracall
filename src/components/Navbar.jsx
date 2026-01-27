import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold text-primary">AM.</a>

        <div className={`md:flex space-x-8 ${open ? "flex flex-col absolute top-16 left-0 right-0 bg-white p-4 shadow-lg space-y-4" : "hidden md:flex"}`}>
          <a href="#hero" className="hover:text-primary transition-colors font-medium">Accueil</a>
          <a href="#about" className="hover:text-primary transition-colors font-medium">À propos</a>
          <a href="#skills" className="hover:text-primary transition-colors font-medium">Compétences</a>
          <a href="#projects" className="hover:text-primary transition-colors font-medium">Projets</a>
          <a href="#contact" className="hover:text-primary transition-colors font-medium">Contact</a>
        </div>

        <button className="md:hidden text-gray-700" onClick={() => setOpen(!open)}>
          <span className="material-symbols-outlined text-2xl">menu</span>
        </button>
      </nav>
    </header>
  );
}
