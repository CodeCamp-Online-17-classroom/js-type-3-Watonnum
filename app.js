let a = undefined;
let b = " ";
let c = !b;

let d = Boolean(a);
let e = Boolean(b);
let f = Boolean(c);

console.log(d);

console.log(e);

console.log(f);

// เนื่องจาก a ยังไม่ได้ถูก define จึงนับเป็น false
// เนื่องจาก b เป็น string เปล่า = มีค่า จึงเป็น true
// เนื่องจาก c มีค่าตรงข้ามกับ b >> !b จึงเป็น false
