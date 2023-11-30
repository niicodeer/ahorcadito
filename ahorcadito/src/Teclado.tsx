import estilos from "./Teclado.module.css";

const LETRAS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "ñ",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type TecladoProps = {
  letraActiva: string[];
  letraInactiva: string[];
  agregrarLetraAdivinada: (letter: string) => void;
  disabled?:boolean
};

export function Teclado({
  letraActiva,
  letraInactiva,
  agregrarLetraAdivinada,
  disabled=false
}: TecladoProps) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: ".5em",
        width: "100%",
        margin: "1em 0",
      }}
    >
      {LETRAS.map((letra) => {
        const estaActivo = letraActiva.includes(letra);
        const estaInactivo = letraInactiva.includes(letra);

        return (
          <button
            className={`${estilos.btn} ${estaActivo ? estilos.active : ""} ${
              estaInactivo ? estilos.inactive : ""
            }`}
            key={letra}
            onClick={() => agregrarLetraAdivinada(letra)}
            disabled={estaActivo || estaInactivo || disabled}
          >
            {letra}
          </button>
        );
      })}
    </div>
  );
}
