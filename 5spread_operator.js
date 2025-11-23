// spread operator ใช้ในการกระจายสมาชิกใน Array ออกมาใช้งาน โดยเติมเครื่องหมาย ... ข้างหน้าชื่อ Array

const newArr = [100, 200, 300];
const data = [10, 20]; // [10, 20, ...newArr] = [10, 20, 100, 200, 300] | [10, 20, newArr] = [10, 20, [100, 200, 300]]
data.push(...newArr);

console.log(data);