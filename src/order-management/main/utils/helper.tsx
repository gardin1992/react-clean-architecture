export function getStatusFromIndex(index: number): string {
  const orderStatus = [
    "Pendente",
    "Em Preparo",
    "Pronto",
    "A Caminho",
    "Recusado",
  ];

  return orderStatus[index];
}
