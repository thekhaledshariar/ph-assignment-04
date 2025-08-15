function onlyCharacter(str) {
  if (typeof str !== "string") return "Invalid";
  return str.replace(/\s+/g, "").toUpperCase();
}

console.log(onlyCharacter(" h e llo wor  ld")); // HELLOWORLD
console.log(onlyCharacter("Cy  bar- At  tac k ")); // CYBAR-ATTACK
console.log(onlyCharacter(" ha ck m e 1 @ru.c  n ")); // HACKME1@RU.CN
console.log(onlyCharacter("Serv er : : Do wn")); // SERVER::DOWN
console.log(onlyCharacter(["hack", "me"])); // Invalid
console.log(onlyCharacter(true)); // Invalid
