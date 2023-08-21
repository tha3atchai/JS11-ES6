
// จงเขียนฟังก์ชันหาค่าผลคูณของตัวเลข โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด
let sum = 1;
const mult = (...x) => {
    for(let item of x) {
        sum *= item;
    }
    return sum;
};

console.log(mult(2, 3, 4));