
// - จงเขียนฟังก์ชัน topSalaries(salaries) เพื่อ return ชื่อคนที่มี salary สูงสุด
// - ถ้า salaries เป็น empty object ให้ return null
// - ถ้ามีคนที่ได้ salary มากสุดให้ return ชื่อคนใดคนหนึ่ง

let salaries = {
  John: 490,
  Pete: 300,
  Mary: 250,
  Joe: 50,
  Michael: 400,
  Doe: 250,
};

const topSalaries = (salaries) => {
    if(Object.keys(salaries).length === 0 && salaries.constructor === Object)return null;
    let max = 0;
    let name = "";
    for(let key in salaries){
        if(salaries[key] > max){
        name = key;
        max = salaries[key];
        }
    }
    return name;
};

console.log(topSalaries(salaries));

