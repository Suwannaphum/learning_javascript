//Block Scope (let / const(constants))

let x = 10;
let y = 20;
if(x === 10){
    let y = 500;    //ถ้าใช้ var จะสามารถเข้าถึงได้ทั้งในและนอกบล็อก | แต่ถ้าใช้ let จะเข้าถึงได้เฉพาะในบล็อกเท่านั้น
    console.log("y ใน= " + y);
}
console.log("y นอก= " + y);

let z = 30; //ค่าคงที่ไม่สามารถเปลี่ยนแปลงค่าได้
z = 50
console.log(z)