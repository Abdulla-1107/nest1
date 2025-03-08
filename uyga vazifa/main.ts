// 1 - misol

// function func(arr: number[], k: number) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] == k) {
//         console.log(arr[i], arr[j]);
//       }
//     }
//   }
// }

// func([1, 2, 1, 2, 3, 4], 4);

// ------------------------------

// 2 - misol

// function func(arr: number[], k: number): number | null {
//   if (arr.length == 0 || k < 0) {
//     return null;
//   }
//   arr.sort((a, b) => b - a);
//   return arr[k - 1];
// }

// console.log(func([1, 9, 32, 5, 3], 1));

// --------------------------

// 3 - misol

function func(str: string): string[] {
  let result: string[] = [str[0]];

  for (let i = 1; i < str.length; i++) {
    let temp = str[i];
    let newResult: string[] = [];

    for (let k of result) {
      for (let j = 0; j <= k.length; j++) {
        newResult.push(k.slice(0, j) + temp + k.slice(j));
      }
    }

    result = newResult;
  }

  return result;
}

console.log(func("abc"));
