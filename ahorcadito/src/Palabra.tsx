type PalabraProps = {
  letrasAdivinadas: string[];
  palabraPorAdivinar: string;
  mostrarPalabra?: boolean;
  correcto?: boolean;
};

export function Palabra({
  letrasAdivinadas,
  palabraPorAdivinar,
  mostrarPalabra = false,
  correcto = false,
}: PalabraProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: ".3em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {palabraPorAdivinar.split("").map((letra, index) => (
        <span
          key={index}
          style={{
            borderBottom: ".1em solid black",
          }}
        >
          <span
            style={{
              visibility:
                letrasAdivinadas.includes(letra) || mostrarPalabra
                  ? "visible"
                  : "hidden",
              color:`${correcto ? "green" : !letrasAdivinadas.includes(letra) && mostrarPalabra
              ? "red"
              : "black"}`
            }}
          >
            {letra}
          </span>
        </span>
      ))}
    </div>
  );
}
