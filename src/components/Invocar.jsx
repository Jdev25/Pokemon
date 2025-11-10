import React, { useEffect, useRef } from "react";
import "./css/invocar.css";

const Invocar = ({ modelo, nombre, onClose }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    // Reproduce el sonido al montar el componente
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        // Algunos navegadores requieren interacción del usuario antes de reproducir audio
        console.log("Click o interacción requerida para reproducir sonido");
      });
    }
  }, []);

  return (
    <div className="invocar-overlay" onClick={onClose}>
      <div className="invocar-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="invocar-nombre">{nombre}</h2>
        <model-viewer
          src={modelo}
          alt={nombre}
          auto-rotate
          camera-controls
          ar
          ar-modes="webxr scene-viewer quick-look"
          environment-image="./src/environments/mundo.hdr"
          skybox-image="./src/environments/mundo.hdr"
          shadow-intensity="1"
          touch-action="pan-y"
          max-camera-orbit="auto 100deg auto"
          style={{ width: "100%", height: "100%" }}
        ></model-viewer>

        {/* Audio oculto */}
        <audio ref={audioRef} src="/src/sounds/pokemon-red_blue_yellow-level-up-sound-effect.mp3" />
      </div>
    </div>
  );
};

export default Invocar;
