let names = ["name1"
    ,"name2"
    ,"name3"
    ,"name4"
    ,"name5"]

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
        return item.names
    })
    console.log(data2)