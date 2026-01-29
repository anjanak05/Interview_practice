const arr5 = [0, 1, 1, 1, 1, 0, 1, 0, 1, 0];

let left = 0;
let right = arr5.length - 1;

while (left<right) {
    if (arr5[left] === 0) {
        left++;
    } else if (arr5[right] === 1){
        right--;
    }else {
        [arr5[left], arr5[right]]= [arr5[right], arr5[left]]
   }
}

console.log(arr5);