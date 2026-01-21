// Write your code below
export{};

const input = process.argv[2];
const num = Number(input);

if(isNaN(num)){
    console.log("Invalid input")
}else if ( num >= 80 && num <= 100){
    console.log("A");
}else if ( num >= 70 && num <= 79 ){
    console.log("B");
}else if ( num >= 60 && num <= 69 ){
    console.log("C");
}else if ( num >= 50 && num <= 59 ){
    console.log("D");
}else if ( num >= 0 && num <= 49 ){
    console.log("F");
}else{
    console.log("Invalid input");
}