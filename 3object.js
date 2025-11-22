const customer = {
    name: "สุวรรณภูมิ",
    age: 24,
    address:"กรุงเทพฯ",
    showData(){
        console.log('ชื่อ: ' + this.name) // this ใช้อ้างอิงถึง object ปัจจุบัน, showData() คือ method
    }
}

customer.showData(); // เรียกใช้ method
console.log(customer.address);