function bestTeam(player1, player2) {
  const isPlainObject = (o) =>
    typeof o === "object" && o !== null && !Array.isArray(o);

  const isValid = (p) =>
    isPlainObject(p) &&
    typeof p.name === "string" &&
    typeof p.foul === "number" &&
    typeof p.cardY === "number" &&
    typeof p.cardR === "number";

  if (!isValid(player1) || !isValid(player2)) return "Invalid";
  const score1 = player1.foul + player1.cardY + player1.cardR;
  const score2 = player2.foul + player2.cardY + player2.cardR;
  if (score1 < score2) return player1.name;
  if (score2 < score1) return player2.name;
  return "Tie";
}

// console.log(
//   bestTeam(
//     { name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
//     { name: "Argentina", foul: 7, cardY: 0, cardR: 0 }
//   )
// );
// console.log(
//   bestTeam(
//     { name: "Germany", foul: 12, cardY: 0, cardR: 0 },
//     { name: "Sweden", foul: 7, cardY: 4, cardR: 1 }
//   )
// );
// console.log(
//   bestTeam(
//     { name: "Germany", foul: 10, cardY: 1, cardR: 1 },
//     { name: "France", foul: 10, cardY: 2, cardR: 1 }
//   )
// );
// console.log(
//   bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 }, "France")
// );
