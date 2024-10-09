import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import subscriptions from "../../data/subscriptions.json";

const Offers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const categories = [...new Set(subscriptions.map((sub) => sub.category))];

  const filteredSubscriptions = subscriptions.filter((sub) =>
    sub.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    document.title = "Offres | Multiple Store";
  }, []);

  return (
    <div className="container py-8 px-10 lg:mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">
        Offres disponibles
      </h1>
      <div className="mb-8 text-center">
        <input
          type="text"
          placeholder="Rechercher un abonnement..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:border-bleu"
        />
      </div>
      {categories.map((category) => (
        <div key={category} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredSubscriptions
              .filter((sub) => sub.category === category)
              .map((offer) => (
                <div
                  key={offer.id}
                  className="bg-white shadow-lg rounded-3xl p-6"
                >
                  <h3 className="text-xl font-semibold">{offer.name}</h3>
                  <p className="text-gray-600 mb-4">{offer.description}</p>
                  <p className="font-bold text-lg mb-4">
                    À partir de {offer.price_min} FCFA/mois
                  </p>
                  <Link to={`/offers/${offer.id}`}>
                    <button className="bg-bleu text-white px-4 py-2 rounded-full hover:bg-bleuFonce w-full transition duration-300 ease-in-out">
                      Voir les détails
                    </button>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Offers;
