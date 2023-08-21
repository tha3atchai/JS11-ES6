
// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร


let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  'Raindrops on roses',
  'whiskers on kittens',
  'Bright copper kettles',
  'warm woolen mittens',
];
console.log(raindrops); // * 'Raindrops on roses'
console.log(whiskers); // ** 'whiskers on kittens'
console.log(aFewOfMyFavoriteThings); // *** ['Bright copper kettles','warm woolen mittens'] ใส่ใน array เพราะ ใช้ rest parameter;