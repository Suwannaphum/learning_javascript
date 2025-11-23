// Destructuring คือการกำหนดค่าที่อยู่ใน Array หรือ Object ให้กับตัวแปร โดยใช้วิธีการจับคู่ค่าระหว่างตัวแปรกับค่าที่อยู่ใน Array หรือ Object

// array
const clors = ['red', 'green', 'blue'];
// const red = clors[0];
// const green = clors[1];

// destructuring array
const [red, green, blue] = clors;

console.log(red);
console.log(green);
///////////////////////////
// object
const product ={
    pro: 'คอมพิวเตอร์',
    price: 25000,
    stock: 50
};
const{ pro: pro, price: price, stock: stock} = product;
console.log(`product: ${pro} 
price: ${price}
stock: ${stock}`);