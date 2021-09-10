// exo 1

const tab = [10, 25, 3, 78, 49];

let i = 0;
let somme = 0;

while (tab.length > i) {
  somme += tab[i];
  i++;
}

console.log(somme); // résultat 165

// exo 2

const nums = [5, 89, 7, 254, 8, 0.5, 457, 5];

let i2 = 0;
let temp = 0;

while (nums.length > i2) {
  if (temp < nums[i2]) {
    temp = nums[i2];
  }
  i2++;
}

console.log(temp); // résultat 457

// exo 3

const nums3 = [42, 5, 78, 4, 32, 42, 59, 8, 7, 42, 58, 5, 2, 0, 2, 4, 2, 42];

let i3 = 0;
let repeat = 0;

while (nums3.length > i3) {
  if (nums3[i3] == 42) {
    repeat++;
  }
  i3++;
}

console.log(repeat); // résultat 4

// exo 4

const nums4 = [3, 5, 4, 333, 6, 2, 12, 2, 457, 24, 42, 2, 24];

let i4 = 0;
let results = 0;

while (nums4.length > i4) {
  if (nums4[i4] % 2 == 0) {
    results++;
  }
  i4++;
}

console.log(results); // résultat 9, replace : nums4[i4] % 2 > 0 by nums4[i4] % 2 == 0 ok
