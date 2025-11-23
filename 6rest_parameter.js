// rest parameter ใช้ในการรวบรวมค่าที่ส่งเข้ามาในฟังก์ชันเป็น Array โดยเติมเครื่องหมาย ... ข้างหน้าชื่อพารามิเตอร์
// rest parameter ใช้ในการส่งค่า Parameter แบบไม่จำกัดจำนวนเข้ามาในฟังก์ชัน โดยใช้เครื่องหมาย ... 

summation = (x, y) => {
    return x + y;
}

console.log(summation(50, 100)); // แบบน้จะรับค่าได้แค่ 2 ตัวเท่านั้น

///////////////////////////////////////////////
sumAll = (...numberArr) => {
    let total = 0;
    for(let num of numberArr){
        total += num
    }
    return total;
}

console.log(sumAll(10, 20, 30, 40, 50, 60, 70, 80, 90, 100));
console.log(sumAll(1000, 8000, 500, 3000)); // สามารถส่งค่าเข้ามาได้ไม่จำกัดจำนวน