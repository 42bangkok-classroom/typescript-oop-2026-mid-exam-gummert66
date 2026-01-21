export{};

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];


let i = 0;
let arr3: number[] = [];
function getUniqueNumbers(arr1: number[], arr2: number[]): number[] {
  // Write your code below
  do{
    if(arr1[i] === arr2[i]){
      arr3 = [];
    }else{
      arr3.push(i)
    }
    i++;
  }while (i < arr1.length || arr2.length);
  return arr3
}

getUniqueNumbers(arr1,arr2);


