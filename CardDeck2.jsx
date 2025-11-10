import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

export default function CardDeck() {
  const deckRef = useRef(null);

  const cards = [
   // { name: "Pikachu", model: "/models/pikachu.glb", image: "/img/pikachu.png" },
   // { name: "Charizard", model: "/models/charizard.glb", image: "/img/charizard.png" },
   // { name: "Greninja", model: "/models/greninja.glb", image: "/img/greninja.png" },
   // { name: "Mimikyu", model: "/models/mimikyu.glb", image: "/img/mimikyu.png" },
   // { name: "Lucario", model: "/models/lucario.glb", image: "/img/lucario.png" },
  ];

  useEffect(() => {
    const deck = deckRef.current;
    if (!deck) return;

    deck.innerHTML = "";

    cards.forEach((card) => {
      const el = document.createElement("div");
      el.className = "poke-card";
      el.innerHTML = `
        <div class="poke-inner">
          <div class="poke-front">
            <img src="${card.image}" alt="${card.name}" />
            <h3>${card.name}</h3>
          </div>
          <div class="poke-back">
            <model-viewer
              src="${card.model}"
              alt="${card.name}"
              auto-rotate
              camera-controls
              style="width:100%; height:100%;"
            ></model-viewer>
          </div>
        </div>
      `;
      deck.appendChild(el);
      Draggable.create(el, { type: "x,y", inertia: true, bounds: window });
      el.addEventListener("dblclick", () => el.classList.toggle("flipped"));
    });
  }, []);

  return (
    <div className="deck-container flex flex-col items-center p-8 min-h-screen bg-gradient-to-b from-blue-700 to-indigo-900 text-white">
      <h1 className="text-3xl font-bold mb-6 text-yellow-400">Mazo Pokémon 3D</h1>
      <div
        className="deck grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        ref={deckRef}
      ></div>
    </div>
  );
}
