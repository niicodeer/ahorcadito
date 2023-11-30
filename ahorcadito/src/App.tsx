import { useCallback, useEffect, useState } from "react";
import palabras from "./listaPalabras.json";
import { Personita } from "./Personita";
import { Palabra } from "./Palabra";
import { Teclado } from "./Teclado";

const nuevaPalabra = () =>
  palabras[Math.floor(Math.random() * palabras.length)];

function App() {
  const [palabraPorAdivinar, setPalabraPorAdivinar] = useState(nuevaPalabra);

  const [letrasAdivinadas, setLetrasAdivinadas] = useState<string[]>([]);

  console.log(palabraPorAdivinar);
  const incorrectos = letrasAdivinadas.filter(
    (letra) => !palabraPorAdivinar.includes(letra)
  );
  const perdedor = incorrectos.length >= 6;
  const ganador = palabraPorAdivinar
    .split("")
    .every((letra) => letrasAdivinadas.includes(letra));

  const agregrarLetraAdivinada = useCallback(
    (letra: string) => {
      if (letrasAdivinadas.includes(letra) || ganador || perdedor) return;

      setLetrasAdivinadas((letraActual) => [...letraActual, letra]);
    },
    [letrasAdivinadas, ganador, perdedor]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      agregrarLetraAdivinada(key);
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [letrasAdivinadas]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;

      e.preventDefault();
      setLetrasAdivinadas([])
      setPalabraPorAdivinar(nuevaPalabra());
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };

  }, []);

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontSize: "2rem",
          textAlign: "center",
        }}
      >
        {ganador && <span>Ganaste! Presiona Enter para intentar de nuevo.</span>}
        {perdedor && <span>Perdiste! Presiona Enter para intentar de nuevo.</span>}
      </div>
      <Personita intentos={incorrectos.length} />
      <Palabra
        letrasAdivinadas={letrasAdivinadas}
        palabraPorAdivinar={palabraPorAdivinar}
        mostrarPalabra={perdedor}
        correcto={ganador}
      />
      <Teclado
        letraActiva={letrasAdivinadas.filter((letra) =>
          palabraPorAdivinar.includes(letra)
        )}
        letraInactiva={incorrectos}
        agregrarLetraAdivinada={agregrarLetraAdivinada}
        disabled={ganador || perdedor}
      />
    </div>
  );
}

export default App;
