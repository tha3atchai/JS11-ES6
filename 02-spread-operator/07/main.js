
// จงเขียนฟังก์ชัน cloneObject โดยรับพารามิเตอร์มาเป็น Object และ return ค่าเป็น Object ที่มี key-value เหมือนกับพารามิเตอร์ที่รับเข้ามาทุกตัว

const obj = {name: "a", lastname: "la", age: 20};

const cloneObject = (object) => {
    return {...object};
};

const obj2 = cloneObject(obj);

console.log(cloneObject(obj));
console.log(obj === obj2);

