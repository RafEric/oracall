export default function Hero() {
  return (
 <section id="hero" 
         className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 text-center"
         data-aos="fade-up">
  <h1 className="text-4xl md:text-6xl font-bold mb-4">Bonjour, je suis Raf</h1>
  <p className="text-lg md:text-2xl mb-8">Développeur Web | Portfolio Réactif</p>
  <a href="#projects" className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition" data-aos="zoom-in" data-aos-delay="300">
    Voir mes projets
  </a>
</section>

  );
}
