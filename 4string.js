// MultLine String สามารถทำงานกับข้อความยาวๆและขึ้นบรรทัดใหม่ได้ได้ โดยใช้ backtick (`)
// Interpolation สามารถแทรกตัวแปรลงในพื้นที่ ของ string ได้ โดยใช้ ${ตัวแปร} ร่วมกับ backtick (`)


// MultLine String
const address = `ชื่อ: สุวรรณภูมิ 
ที่อยู่: 11/50 ถนนปิ๊ อำเภอหิ๊ จังหวัดยิ้ม 
เบอร์: 012-345-6789`

console.log(address)

// Interpolation
let name = "Mhailele"

const address2 = `ชื่อ: ${name} 
ที่อยู่: 11/50 ถนนปิ๊ อำเภอหิ๊ จังหวัดยิ้ม 
เบอร์: 012-345-6789`

console.log(address2)