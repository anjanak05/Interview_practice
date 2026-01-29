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
console.log("adsc", answer)