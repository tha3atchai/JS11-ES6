
// จงเขียนฟังก์ชัน mergeObjects โดยพารามิเตอร์ของฟังก์ชันสามารถรับ Object ได้ไม่จำกัด และให้ return ค่าเป็น Object ที่เกิดจาก Object ในพารามิเตอร์มา merge กัน (ในกรณีที่ Object ในพารามิเตอร์มี key ซ้ำกันให้ยึดค่าพารามิเตอร์ตัวที่มาก่อนเป็นหลัก)

let obj = {};

const mergeObjects = (...object) => {
   for(let x of object) {
      obj = {...x, ...obj}
   };
};

mergeObjects({name: "a", age: 3, location: "Phayathai"}, {name: "b", age: 2, gender: "male", provice: "chainat"}, {name: "c", age: 5, gender: "female", location: "Ladprao"}, {name: "d", age: 6, gender: "none", provice: "bangkok"});

console.log(obj);