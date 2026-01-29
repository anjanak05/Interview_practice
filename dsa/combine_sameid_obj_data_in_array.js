const arr = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "D" },
  { id: 3, name: "C" },
  { id: 2, name: "E" }
];

const ans = arr.reduce((acc, curr) => {
    if (acc[curr.id]) {
        acc[curr.id].name += " "+ curr.name
    } else {
        acc.push(curr)
    }
    return acc;
    
}, [])
console.log(ans)