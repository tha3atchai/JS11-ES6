
// จงเขียนฟังก์ชัน filterOutOdds โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด และให้ return ค่าเป็น array ของเลขที่เป็นเลขคู่

let arr = [];

const filterOutOdds = (...x) => {
    for(let item of x){
        if(item % 2 === 0) arr.push(item);
    }
};

filterOutOdds(1,2,3,4,5,6,7,8,9)

console.log(arr);