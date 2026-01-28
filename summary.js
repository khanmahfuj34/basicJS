// const person = {
//         name: string = "mahfuj",
//         age: number = 24,
//         father: {
//             name: "abul",
//             age: 50
//         }
//     }
//     // console.log(Object.keys(person));
//     // console.log(Object.values(person));
//     // console.log(Object.entries(person));

// // console.log(person ? .mother ? .name)
// const numbers = [1, 2, 3, 4, 5];
// const newnumbers = numbers.map(n => n * n);
// console.log(newnumbers);
// console.log(...newnumbers);

// const max = Math.max(...newnumbers);
// console.log(max);

const products = [
        { name: "laptop", price: 32000, brand: "lenovo", color: "silver" },
        { name: "phone", price: 7000, brand: "iphone", color: "golden" },
        { name: "watch", price: 3000, brand: "casio", color: "black" },
        { name: "sunglass", price: 300, brand: "ribon", color: "black" },
        { name: "camera", price: 9000, brand: "canon", color: "gray" }
    ]
    // products.forEach(p => { console.log(p.name === "camera") });
    // const colors = products.filter(p => p.name != "camera");
const colors = products.find(p => p.name === "phone");
console.log(colors);