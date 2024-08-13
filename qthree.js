const gadgets = [
    {id:1, name:"Smartphones",brand:"Brand A",price:699,features:["Touchscreen","Camera","Bluetooth","GPS"],inStock:true

    },{id:2, name:"Laptop",brand:"Brand B",price:1199,features:["SSD","16GB RAM","Wi-Fi","HD Display"],inStock:false
    },{id:2, name:"Smartwatch",brand:"Brand C",price:199,features:["Rate monitor","GPS","Bluetooth","Water resistant"],inStock:false

    },{id:2, name:"Tablet",brand:"Brand D",price:499,features:["Touchscreen","Camera","Bluetooth","GPS"],inStock:true

    },{id:2, name:"Wireless Earbuds",brand:"Brand E",price:149,features:["Bluetooth","Camera","Bluetooth","GPS"],inStock:true

    }
];

// ///1.Print all gadgets name
// const gadgetNames = gadgets.map(gadget => gadget.name);
// console.log(gadgetNames);

// // ///2.print all gadgets name whose price is greater than 500
//  const expensiveGadgets = gadgets.filter(gadget => gadget.price > 500).map(gadget => gadget.name);
//  console.log(expensiveGadgets);

// ///3.print out of stock gadget
// const outOfStockGadgets = gadgets.filter(gadget => gadget.inStock).map(gadget => gadget.name);
// console.log(outOfStockGadgets);

// ///4.add a new feature to the laptop gadget
// const laptop = gadgets.find(gadget => gadget.name === "Laptop");
// if (laptop) {
//     laptop.features.push("Backlit Keyboard");
// }
// console.log(laptop);

// ///5.what wii be the revenue generated when all the available gadgets are sold out
const revenue = gadgets
    .filter(gadget => gadget.inStock)
    .reduce((total, gadget) => total + gadget.price, 0);

console.log(revenue);