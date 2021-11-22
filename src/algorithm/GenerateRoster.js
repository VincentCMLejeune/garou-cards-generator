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
  let str = [];
  for (let i = 0; i < Number(villagers); i++) {
    arr.push("villageois");
  }
  str.push(Number(villagers) + ' villaegois')
  for (let i = 0; i < Number(garous); i++) {
    arr.push("garou");
  }
  str.push(Number(garous) + ' loups-garous')
  if (voyante) {
    arr.push("voyante");
    str.push('1 voyante')
  }
  if (sorciere) {
    arr.push("sorciere");
    str.push('1 sorcière')
  }
  if (chasseur) {
    arr.push("chasseur");
    str.push('1 chasseur')
  }
  if (cupidon) {
    arr.push("cupidon");
    str.push('1 cupidon')
  }
  if (fille) {
    arr.push("fille");
    str.push('1 petite fille')
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

  return [arr, str];
}
