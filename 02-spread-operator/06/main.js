
// จงเขียนฟังก์ชัน cloneArray โดยรับพารามิเตอร์มาเป็น Array และ return ค่าเป็น Array ที่มี element เหมือนกับพารามิเตอร์ที่รับเข้ามาทุกตัวi

const arr = [1, 2, 3, 4, 5, 6];

const cloneArray = (array) => [...array];
const arr2 = cloneArray(arr);

console.log(arr2);
console.log(arr === arr2);
