import React, { useEffect, useState } from "react";
import "./Preloader.css"; // Assurez-vous de créer ce fichier pour ajouter les styles nécessaires

const Preloader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Le preloader disparaîtra après 2 secondes
    const timer = setTimeout(() => setShow(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="preloader-container">
      <span className="preloader-letter M">M</span>
      <span className="preloader-letter S">s</span>
    </div>
  );
};

export default Preloader;
