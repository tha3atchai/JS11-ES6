
// จงเขียนฟังก์ชัน removeRandom โดยรับพารามิเตอร์มาเป็น Array และ return ค่าเป็น Array ที่มี element ถูกลบออกไปหนึ่งตัวโดยตำแหน่งที่ลบให้เกิดจากการสุ่ม

const arr = [1, 2, 3, 4, 5, 6];

const removeRandom = (array) => {
    const idx = Math.floor(Math.random() * (array.length - 0));
    array.splice(idx, 1);
    return array;
};

console.log(removeRandom(arr));
