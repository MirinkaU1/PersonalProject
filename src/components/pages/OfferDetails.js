import React, { useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import subscriptions from "../../data/subscriptions.json";

const OfferDetails = () => {
  const { id } = useParams();
  const offer = subscriptions.find((sub) => sub.id === parseInt(id));
  const { user, addUserSubscription } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (offer) {
      document.title = `${offer.name} | Multiple Store`;
    } else {
      document.title = "Offre non trouvée";
    }
  }, [offer]);

  if (!offer) {
    return <div>Offre non trouvée</div>;
  }

  const handleChooseOffer = (variant) => {
    if (!user) {
      navigate("/login");
    } else {
      addUserSubscription({
        ...variant,
        name: offer.name,
        variant: variant.name,
      });
      navigate("/dashboard");
    }
  };

  const renderDeviceIcons = (devices) => {
    const deviceIcons = {
      TV: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z"
          />
        </svg>
      ),
      Mobile: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
          />
        </svg>
      ),
      Tablet: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-15a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 4.5v15a2.25 2.25 0 0 0 2.25 2.25Z"
          />
        </svg>
      ),
      Computer: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
          />
        </svg>
      ),
    };

    return devices.map((device) => (
      <div key={device} className="inline-block mr-2">
        {deviceIcons[device]}
      </div>
    ));
  };

  const faqItems = [
    {
      question: "Comment fonctionne l'abonnement ?",
      answer:
        "Une fois que vous avez choisi une offre, vous recevrez un email avec les coordonnées pour accéder à votre abonnement. Vous pouvez utiliser ces informations pour vous connecter et profiter de votre abonnement.",
    },
    {
      question: "Puis-je changer de plan plus tard ?",
      answer:
        "Oui, vous pouvez changer de plan à tout moment en accédant à votre tableau de bord et en sélectionnant une nouvelle offre.",
    },
    {
      question: "Comment puis-je annuler mon abonnement ?",
      answer:
        "Vous pouvez annuler votre abonnement à tout moment en accédant à votre tableau de bord et en suivant les instructions pour annuler.",
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="flex gap-3 items-center mb-8 px-10">
        <Link to="/offers">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 hover:text-bleu transition duration-300 ease-in-out"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </Link>
        <h1 className="text-3xl font-bold px-10">{offer.name}</h1>
      </div>
      <p className="text-gray-600 mb-4 px-10">{offer.description}</p>
      <div className="">
        <div className="hidden lg:grid md:grid sm:grid-cols-2 md:grid-cols-3 md:gap-2 lg:gap-8 lg:px-10">
          {offer.variants.map((variant, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold">{variant.name}</h3>
                <p className="text-gray-600 mb-4">{variant.description}</p>
                <p className="font-bold text-lg mb-4">
                  {variant.price} FCFA/mois
                </p>
                <div className="py-4 grid grid-cols-1 gap-4">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <strong>Qualité vidéo et sonore :</strong>{" "}
                    {variant.videoQuality}
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <strong>Résolution :</strong> {variant.resolution}
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg text-black">
                    <strong>Appareils pris en charge :</strong>{" "}
                    {renderDeviceIcons(variant.supportedDevices)}
                  </div>
                </div>
              </div>
              <button
                className="btn bg-bleu text-white px-4 py-2 rounded-full hover:bg-bleuFonce w-full mt-4"
                onClick={() => handleChooseOffer(variant)}
              >
                Confirmer
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* Carousel pour la version mobile */}
      <div className="lg:hidden md:hidden carousel carousel-center bg-neutral rounded-box max-w-full space-x-4 p-4">
        <div className="carousel-item mx-3">
          {offer.variants.map((variant, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-3xl p-6 mx-3 w-80 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold">{variant.name}</h3>
                <p className="text-gray-600 mb-4">{variant.description}</p>
                <p className="font-bold text-lg mb-4">
                  {variant.price} FCFA/mois
                </p>
                <div className="py-4 grid grid-cols-1 gap-4">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <strong>Qualité vidéo et sonore :</strong>{" "}
                    {variant.videoQuality}
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <strong>Résolution :</strong> {variant.resolution}
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg text-black">
                    <strong>Appareils pris en charge :</strong>{" "}
                    {renderDeviceIcons(variant.supportedDevices)}
                  </div>
                </div>
              </div>
              <button
                className="btn bg-bleu text-white px-4 py-2 rounded-full hover:bg-bleuFonce w-full mt-4"
                onClick={() => handleChooseOffer(variant)}
              >
                Confirmer
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 px-10">
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        {faqItems.map((item, index) => (
          <div key={index} className="collapse mb-4">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-xl font-semibold peer-checked:bg-white text-bleu">
              {item.question}
            </div>
            <div className="collapse-content text-gray-600 peer-checked:bg-white">
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferDetails;
