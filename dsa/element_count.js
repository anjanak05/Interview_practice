const arr = [1, 2, 2,0,3,3,3,2,3,3,6, 3, 3, 3, 4];





let objr = {}
for (let i = 0; i < arr.length; i++){
    let r = arr[i]
    objr[r]  = (objr[r] || 0)+1
}
console.log("onjvv", objr)




let r = arr.reduce((acc, curr) => {
  
        acc[curr] = (acc[curr]||0) +1
        

    return acc
},{})
console.log(r)
