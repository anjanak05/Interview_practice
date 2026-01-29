// const arrw = [
//   { id: 1, name: "A" },
//   { id: 2, name: "B" },
//   { id: 1, name: "A" },
//   { id: 3, name: "C" },
//   { id: 2, name: "B" }
// ];
// const arr1 = [
//   { id: 1, name: "A" },
//   { id: 2, name: "B" },
//   { id: 1, name: "D" },
//   { id: 3, name: "C" },
//   { id: 2, name: "E" }
// ];


// const unique = arr.reduce((acc, curr)=>{
//     if(!acc[curr.id]){
//         acc.push(curr)
//     }
//     return acc
// },[])

// console.log(unique)


// const uni = Object.values(arr1)
// let rr =  arr1.reduce((acc, curr)=>{
//     if(!acc[curr.id]){
//         acc[curr.id]=  {id:curr.id, name:curr.name}
//     }else{
//         acc[curr.id].name += " " + curr.name
//     }
//     return acc
// },{})
// console.log("uni", Object.values(rr))


// const arr4 = [0, 1, 1, 1, 1, 0, 1, 0, 1, 0];

// let l = 0;
// let rrr = arr.length-1

// while(l<r){
//     if(arr[l]==0){
//         l++;
//     }else if(arr[r]==1){
//         r--;
//     }else{
//         [arr[l], arr[r]] = [arr[r], arr[l]];
//         l++
//         r--
//     }
// }

// console.log(arr)

const obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3
    }
  },
  f: 4
};

// function flat(obj, pKey="", res={}){
    
//     for(let key in obj){
        
//     let finalKey = pKey?pKey+"."+ key:key;
    
//         if(typeof obj[key]==="object" && obj[key]!= null){
//             flat(obj[key], finalKey, res)
//         }else{
//             res[finalKey]=obj[key]
//         }
//     }
//     return res
// }
// const ress = flat(obj)
// console.log(res)
// const arrs = [1, [2, [3]]]

//  function flat(arr){
//     let res=[]
//     for(let key of arr){
        
//         if(Array.isArray(key)){
//             res = res.concat(flat(key))
//         }else{
//           res.push(key)
//         }
//     }
//     return res
// }
// const resss = flat(arr)
// console.log(res)



// const arr = [1, 2, 2, 3, 3, 3, 4];

// let res ={}

// for(let key=0; key<arr.length; key++){
//     let r =arr[key]
//     if(res[r]){
//         res[r] +=1
//     }else{
//         res[r] =1
//     }
// }

// console.log(res)

// let r = arr.reduce((acc, curr)=>{
  
//         acc[curr] = (acc[curr]||0) +1
        

//     return acc
// },{})
// console.log(r)

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

const arr6 = [1, [2, [3, 4]]]

const float32Array = (arr6) => {
    return arr6.reduce((acc, curr) => {
        if (Array.isArray(curr)) {
            acc.concat(float32Array(curr))
        } else {
            acc.push(curr)
        }
    return acc
      
  }, [])
}
const r = float32Array(arr6)
 console.log("r", r)


function flat2(obj, parentKey="", res={}) {
    for (let key in obj) {
        let finalKey = parentKey ? parentKey + "." + key : key;
        if (typeof obj[key] === "object" && obj[key] !== null) {
            flat2(obj[key], finalKey, res)
        } else {
            res[finalKey] = obj[key]
        }
    }
    return res
}
const answer = flat2(obj)
 console.log("adsc",answer)