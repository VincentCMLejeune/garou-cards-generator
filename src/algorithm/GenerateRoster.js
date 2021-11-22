export default function generateRoster(
  villagers,
  garous,
  voyante,
  chasseur,
  sorciere,
  cupidon,
  fille
) {
  let arr = [];
  for (let i = 0; i < Number(villagers); i++) {
    arr.push("villageois");
  }
  for (let i = 0; i < Number(garous); i++) {
    arr.push("garou");
  }
  if (voyante) {
    arr.push("voyante");
  }
  if (sorciere) {
    arr.push("sorciere");
  }
  if (chasseur) {
    arr.push("chasseur");
  }
  if (cupidon) {
    arr.push("cupidon");
  }
  if (fille) {
    arr.push("fille");
  }

  let currentIndex = arr.length;
  while (currentIndex !== 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
  }

  return arr;
}
