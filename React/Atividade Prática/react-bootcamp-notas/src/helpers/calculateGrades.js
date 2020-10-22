function calculateTotalAverageGrades(totalGrades, numberGrades) {
  return totalGrades / numberGrades;
}

const formatterPercent = Intl.NumberFormat("pt-BR", {
  style: "percent",
  minimumFractionDigits: 2,
});

function formatPercent(value) {
  return formatterPercent.format(value);
}

export { calculateTotalAverageGrades, formatPercent };
