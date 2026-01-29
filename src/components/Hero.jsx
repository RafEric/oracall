import React from 'react';

export default function Hero() {
  return (
    <section className="bg-green-50 [@custom-variant:dark]:bg-gray-900 py-25 px-6 sm:px-8 lg:px-16">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center justify-center">

    {/* Texte */}
    <div className="text-center lg:text-left">
      <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 [@custom-variant:dark]:text-white">
        Recrutez plus vite,
        <br />
        <span className="text-green-600">les meilleurs talents</span>
      </h1>
      <p className="mt-6 text-gray-600 [@custom-variant:dark]:text-gray-300 max-w-lg mx-auto lg:mx-0">
        Une plateforme moderne pour connecter entreprises et talents qualifiés partout dans le monde.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
        <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition">Commencer</button>
        <button className="border border-gray-300 [@custom-variant:dark]:border-gray-600 px-6 py-3 rounded-full text-gray-700 [@custom-variant:dark]:text-gray-200">Voir les offres</button>
      </div>
    </div>

    {/* Images */}
  <div className="grid grid-cols-2 gap-1 justify-items-center">
  <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-24 h-24 rounded-2xl shadow-lg"/>
  <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-24 h-24 rounded-2xl shadow-lg"/>
  <img src="https://randomuser.me/api/portraits/women/68.jpg" className="w-24 h-24 rounded-2xl shadow-lg col-span-2"/>
  <img src="https://randomuser.me/api/portraits/women/68.jpg" className="w-24 h-24 rounded-2xl shadow-lg "/>
</div>


  </div>
</section>

  );
}
