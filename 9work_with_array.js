// join, concat
const data = [100, 200, 300];
console.log(data);

// const result = data.join(); // join คือการรวมค่าภายใน array ให้เป็น string โดยมีค่าคั่นกลางเป็น comma (,)
const result = data.join(" - ");
console.log(result);


const data1 = [100, 200, 300];
const data2 = [400, 500];

// const result1 = data1.concat(data2); // concat คือการนำ array สองตัวมารวมกัน
const alldata = data1.concat(data2);
console.log(alldata);