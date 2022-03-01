let names = ["Lame1"
,"Lame2"
,"xame3"
,"Same4"
,"Uname5"]

for(let i = 0;i<names.length;i++){
    console.log(names[i])
}

function printName(item){
    console.log(item)
}
names.forEach(printName)

names.forEach(function printName(item){
    console.log(item)
})
/* es6 문법 */
names.forEach((item, index)=>{console.log(item,index)})

/* map는 return이 필요하며, 반드시 배열을 반환함 */
let data = names.map((item)=>{
    return item
})
console.log(data)

let data1 = names.map((item)=>{
    return item + "하하하"
})
console.log(data1)

let ceoList = [
    {name:"Larry Page",age:23,ceo:true},
    {name:"Tim Cook",age:40,ceo:true},
    {name:"Elon Musk",age:55,ceo:false},
]

let data2 = ceoList.map((item)=>{
    return item.names + ':' + item.age
})
console.log(data2)

/** filter 작업 - 배열 */
let data3 = ceoList.filter((item)=>{
    return item.age == 23
})
console.log(data3)

let data4 = names.filter((item)=>{
    return item.startsWith("L")
})
console.log(data4 + ' : ' + 'filter')

/* some */
let data5 = names.some((item)=>{
    return item.startsWith("A")
})
console.log(data5 + ' : ' + 'some')

/* every */
let data6 = names.every((item)=>{
    return item.startsWith("L")
})
console.log('every : ', data6)

let data7 = names.every((item)=>{
    return item.length > 0
})
console.log('every-length : ', data7)
/* find-정확한 값 딱 하나만 찾기에 좋음 */
let data8 = names.find((item)=>{
    return item == "xame3" 
})
console.log('find : ', data8)

/* findIndex */
let data9 = names.findIndex((item)=>{
    return item == "xame3" 
})
console.log('findIndex : ', data9)