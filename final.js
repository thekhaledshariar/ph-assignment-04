// problem-01 //
function totalFine(fare) {
  if (typeof fare !== "number" || fare <= 0) {
    return "Invalid";
  }
  const vat = fare * 0.2;
  const serviceCharge = 30;
  return fare + vat + serviceCharge;
}

// console.log(totalFine(200));
// console.log(totalFine(0));
// console.log(totalFine(50));
// console.log(totalFine(552));
// console.log(totalFine(-35));
// console.log(totalFine("65"));
// console.log(totalFine("Gorib tai ticket katinai"));

//problem-02 //
function onlyCharacter(str) {
  if (typeof str !== "string") return "Invalid";
  return str.replace(/\s+/g, "").toUpperCase();
}

// console.log(onlyCharacter(" h e llo wor  ld"));
// console.log(onlyCharacter("Cy  bar- At  tac k "));
// console.log(onlyCharacter(" ha ck m e 1 @ru.c  n "));
// console.log(onlyCharacter("Serv er : : Do wn"));
// console.log(onlyCharacter(["hack", "me"]));
// console.log(onlyCharacter(true));

//problem-03 //
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

//problem-04 //
function isSame(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Invalid";
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

// console.log(isSame([1, 2, 3], [1, 2, 3]));
// console.log(isSame([34, 5, 7, 9], [34, 5, 7]));
// console.log(isSame([1, undefined, 3], [1, null, 3]));
// console.log(isSame([1, 4, 5], [1, 4, 5]));
// console.log(isSame([1, "4", 4], [1, 4, 4]));
// console.log(isSame([2, 5, 6], 256));
// console.log(isSame({ data: [2, 5, 6] }, [2, 5, 6]));

//problem-05 //
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

// console.log(resultReport([]));
// console.log(resultReport([98, 87, 67, 91, 92, 33, 87]));
// console.log(resultReport([99, 87, 67, 12, 87]));
// console.log(resultReport([99]));
// console.log(resultReport(100));
