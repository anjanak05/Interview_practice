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
