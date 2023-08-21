
// จงเขียนฟังก์ชันตรวจสอบอายุ โดยรับข้อมูล user ที่อยู่ใน object ที่มี keys เป็น firstName lastName และ age โดยถ้า user มีอายุมาก 18 ให้แสดงผลเป็นการทักทายแล้วตามด้วยชื่อ-นามสกุล ในกรณีที่มีอายุน้อยกว่าหรือเท่ากับ 18 ให้แสดงผลว่า ไม่มีสิทธิ์เข้าใช้งาน (ใช้ destructuring)

const user = {
    firstName: "a",
    lastName: "b",
    age: 20,
};

const func = (x) => {
    const {firstName, lastName, age} = x;
    (age <= 18)? console.log("ไม่มีสิทธิ์เข้าใช้งาน") : console.log(`สวัสดี ${firstName} ${lastName}`);
};

func(user);