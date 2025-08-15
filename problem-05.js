function resultReport(marks) {
  if (!Array.isArray(marks)) return "Invalid";
  if (marks.length === 0) {
    return { finalScore: 0, pass: 0, fail: 0 };
  }
  for (const m of marks) {
    if (typeof m !== "number" || !Number.isFinite(m)) {
      return "Invalid";
    }
  }
  let total = 0;
  let pass = 0;
  let fail = 0;
  for (const score of marks) {
    total += score;
    if (score >= 40) pass++;
    else fail++;
  }
  const finalScore = Math.round(total / marks.length);
  return { finalScore, pass, fail };
}

console.log(resultReport([]));
console.log(resultReport([98, 87, 67, 91, 92, 33, 87]));
console.log(resultReport([99, 87, 67, 12, 87]));
console.log(resultReport([99]));
console.log(resultReport(100));
