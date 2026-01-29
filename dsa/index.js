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




let res ={}

for(let key=0; key<arr.length; key++){
    let r =arr[key]
    if(res[r]){
        res[r] +=1
    }else{
        res[r] =1
    }
}

console.log(res)







 


