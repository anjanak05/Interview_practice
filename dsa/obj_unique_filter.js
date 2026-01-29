const arrw = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "A" },
  { id: 3, name: "C" },
  { id: 2, name: "B" }
];

const arr1 = arrw.reduce((acc, curr) => {
  if (!acc[curr.id]) {
    acc.push(curr)
  }
  return acc;
},[])
console.log(arr1)