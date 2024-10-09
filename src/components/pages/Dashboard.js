"use client";

import React, { useState, useContext } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { AuthContext } from "../../context/AuthContext";

const Dashboard = () => {
  const [alert, setAlert] = useState(null);
  const { subscriptions } = useContext(AuthContext);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setAlert("Copié dans le presse-papiers !");
    setTimeout(() => setAlert(null), 3000);
  };

  const activeSubscriptions = subscriptions.filter(
    (sub) => sub.status === "Actif"
  );
  const inactiveSubscriptions = subscriptions.filter(
    (sub) => sub.status !== "Actif"
  );

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Tableau de bord</h1>
      <div className="bg-white p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Mes abonnements actifs</h2>
        <ul>
          {activeSubscriptions.map((variant, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between items-center mb-4 p-4 bg-gray-100 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-200 w-full">
                    <span>
                      {variant.name} ({variant.variant})
                    </span>
                    <div className="flex gap-3 items-center">
                      <span className="px-4 py-1 rounded-lg bg-green-500 text-white">
                        {variant.status}
                      </span>
                      {open ? (
                        <ChevronUpIcon className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                      )}
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel
                    className={`px-4 pb-4 text-sm text-gray-500 transition-all duration-300 ease-in-out transform ${
                      open ? "max-h-96" : "max-h-0"
                    } overflow-hidden`}
                  >
                    <div className="flex justify-around items-center">
                      <span>Email: {variant.email}</span>
                      <button
                        onClick={() => copyToClipboard(variant.email)}
                        className="text-white bg-bleu py-1 hover:bg-bleuFonce px-4 rounded-xl transition duration-300 ease-in-out transform hover:scale-105"
                      >
                        Copier
                      </button>
                    </div>
                    <div className="flex justify-around items-center mt-2">
                      <span>Mot de passe: {variant.password}</span>
                      <button
                        onClick={() => copyToClipboard(variant.password)}
                        className="text-white bg-bleu py-1 hover:bg-bleuFonce px-4 rounded-xl transition duration-300 ease-in-out transform hover:scale-105"
                      >
                        Copier
                      </button>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </ul>
        <h2 className="text-2xl font-bold mb-4 mt-8">
          Mes abonnements inactifs
        </h2>
        <ul>
          {inactiveSubscriptions.map((variant, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between items-center mb-4 p-4 bg-gray-100 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-200 w-full">
                    <span>
                      {variant.name} ({variant.variant})
                    </span>
                    <div className="flex gap-3 items-center">
                      <span className="px-4 py-1 rounded-lg bg-red-500 text-white">
                        {variant.status}
                      </span>
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel
                    className={`px-4 pb-4 text-sm text-gray-500 transition-all duration-300 ease-in-out transform ${
                      open ? "max-h-96" : "max-h-0"
                    } overflow-hidden`}
                  >
                    <div className="flex justify-between items-center">
                      <span>Email: {variant.email || "Non disponible"}</span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span>
                        Mot de passe: {variant.password || "Non disponible"}
                      </span>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </ul>
      </div>
      {alert && (
        <div className="fixed bottom-4 right-4 alert alert-success shadow-lg">
          <div>
            <span>{alert}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
