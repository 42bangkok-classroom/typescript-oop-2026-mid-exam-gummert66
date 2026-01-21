// Write your code below
export{};

const input = process.argv[2]
const n = Number(input);

if(!isNaN(n) && n > 0){
    for(let i = 5; i > n ;i--){
        console.log(i);
    }
}