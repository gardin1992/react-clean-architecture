export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export const toDecimal = (value: number) => {
  return value.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
};
