// src/components/Login.js
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "cherifmohamedabraham@gmail.com" && password === "1234") {
      login({ email });
      const redirectTo =
        new URLSearchParams(location.search).get("redirect") || "/dashboard";
      navigate(redirectTo);
    } else {
      alert("Échec de la connexion");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg p-8">
        <form onSubmit={handleLogin} className="space-y-6">
          <img
            src="./img/logo_transparent/logo_transparent_8.png"
            border="0"
            alt="logo"
            className="mx-auto w-28"
          />
          <h2 className="text-2xl font-bold text-bleu text-center">
            Connexion
          </h2>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-bleu"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-bleu"
              placeholder="Mot de passe"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-bleu text-white py-2 px-4 rounded-lg hover:bg-bleuFonce transition duration-300 ease-in-out"
          >
            Connexion
          </button>
          <div className="mt-4">
            <p className="text-sm text-gray-600">
              Vous n'avez pas de compte?{" "}
              <Link
                to={`/signup?redirect=${location.pathname}`}
                className="text-bleu hover:underline"
              >
                Créer un compte
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
