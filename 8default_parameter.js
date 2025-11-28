// Default Parameter

getDataCustomer = (customerName, customerAddress="กรุงเทพ") => {  // กำหนด default parameter คือ "กรุงเทพ"
    const adress = `ชื่อลูกค้า: ${customerName}
ที่อยู่ลูกค้า: ${customerAddress}`;
    return adress;
}


console.log(getDataCustomer("Mhai", "BKK"));
console.log(getDataCustomer("lele"));