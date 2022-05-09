const squre=require("./squre.js")
const cal=(a)=>{
    console.log(`the value of a is ${a} and the area is`+squre.area(a));


    console.log(`the value of a is ${a} and the area is`+squre.parameter(a));
}
console.log(__filename);
console.log(__dirname);
cal(5);