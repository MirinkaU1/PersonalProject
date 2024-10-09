import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    document.title = "Accueil | Multiple Store";
  }, []);
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-10 md:mx-0 lg:px-20">
        <div className="container mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mt-24 mb-4 text-left">
            Dépensez moins, <br />
            <span className="text-bleuFonce">profitez plus !</span>
          </h2>
          <p className="text-lg mb-6  text-left">
            La solution de co-abonnement qui va faire du bien à votre
            portefeuille !
          </p>
          <Link
            to="/offers"
            className="bg-bleu text-white px-6 py-3 rounded-full text-lg hover:bg-bleuFonce transition duration-300 ease-in-out"
          >
            Découvrir les offres
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-10 md:mx-0 lg:px-20">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">
            Pourquoi choisir Multiple Store ?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-4">Abonnements Variés</h4>
              <p className="text-gray-600">
                Choisissez parmi une large gamme de services populaires comme
                Netflix, Spotify, et bien plus.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-4">Économisez de l'argent</h4>
              <p className="text-gray-600">
                Partagez les coûts d'abonnements avec vos amis et votre famille
                tout en respectant les règles.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-4">Sécurité garantie</h4>
              <p className="text-gray-600">
                Toutes les transactions et partages sont sécurisés avec les
                dernières technologies de protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 px-10 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Nos Services</h2>
          <div className="grid grid-cols-2 place-items-center lg:flex text-center items-center justify-center gap-8">
            <div className="">
              <img
                src="./img/logo/netflix_logo.png"
                alt="Netflix"
                className="w-32 h-auto"
              />
            </div>
            <div className="">
              <img
                src="./img/logo/spotify_logo.png"
                alt="Netflix"
                className="w-32 h-auto"
              />
            </div>
            <div className="">
              <img
                src="./img/logo/disneyplus_logo.png"
                alt="Netflix"
                className="w-32 h-auto"
              />
            </div>
            <div className="">
              <img
                src="./img/logo/crunchyroll_logo.png"
                alt="Netflix"
                className="w-32 h-auto"
              />
            </div>
            <div className="">
              <img
                src="./img/logo/primevideo_logo.png"
                alt="Netflix"
                className="w-32 h-auto"
              />
            </div>
            <div className="lg:hidden">
              <p>Et bien d'autres...</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
