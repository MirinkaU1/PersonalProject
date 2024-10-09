// src/components/Signup.js
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignup = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      // Logique de création de compte (ici simulée)
      console.log("Compte créé avec succès !");
      const redirectTo =
        new URLSearchParams(location.search).get("redirect") || "/login";
      navigate(redirectTo); // Redirection vers la page de redirection après la création du compte
    } else {
      alert("Les mots de passe ne correspondent pas.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <img
          src="./img/logo_transparent/logo_transparent_8.png"
          border="0"
          alt="logo"
          className="mx-auto w-28"
        />
        <h2 className="text-2xl font-bold text-bleu text-center mb-6">
          Créer un compte
        </h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="text"
            placeholder="Nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded-lg"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg"
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-lg"
            required
          />
          <input
            type="password"
            placeholder="Confirmez le mot de passe"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-3 border rounded-lg"
            required
          />
          <button
            type="submit"
            className="w-full bg-bleu text-white py-3 rounded-lg hover:bg-bleuFonce"
          >
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
