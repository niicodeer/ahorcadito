const CABEZA = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
  />
);
const CUERPO = (
  <div
    style={{
      height: "100px",
      width: "10px",
      backgroundColor: "black",
      position: "absolute",
      top: "120px",
      right: "0",
    }}
  />
);
const BRAZO_DER = (
  <div
    style={{
      width: "100px",
      height: "10px",
      backgroundColor: "black",
      position: "absolute",
      top: "150px",
      right: "-100px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />
);
const BRAZO_IZQ = (
  <div
    style={{
      width: "100px",
      height: "10px",
      position: "absolute",
      backgroundColor: "black",
      top: "150px",
      right: "10px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />
);
const PIERNA_DER = (
  <div
    style={{
      width: "100px",
      height: "10px",
      position: "absolute",
      backgroundColor: "black",
      top: "210px",
      right: "-90px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
);
const PIERNA_IZQ = (
  <div
    style={{
      width: "100px",
      height: "10px",
      position: "absolute",
      backgroundColor: "black",
      top: "210px",
      right: "0px",
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  />
);

type Personita = {
  intentos: number;
};

const PARTES_CUERPO = [CABEZA, CUERPO, BRAZO_DER, BRAZO_IZQ, PIERNA_DER, PIERNA_IZQ];

export function Personita({ intentos }: Personita) {
  return (
    <div style={{ position: "relative" }}>
      {PARTES_CUERPO.slice(0, intentos)}
      <div
        style={{
          position: "absolute",
          width: "10px",
          height: "50px",
          backgroundColor: "black",
          top: 0,
          right: 0,
        }}
      />
      <div
        style={{
          width: "200px",
          height: "10px",
          backgroundColor: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          width: "10px",
          height: "400px",
          backgroundColor: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          width: "250px",
          height: "10px",
          backgroundColor: "black",
        }}
      />
    </div>
  );
}
