export{};

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];



let arr3: number[] = [];
function getUniqueNumbers(arr1: number[], arr2: number[]): number[] {
  // Write your code below
  for(let i = 0; i < arr1.length || arr2.length;i++){
    for(let j = 0;j <arr1.length || arr2.length;j++ ){
      if(arr1[i] === arr2[j]){
        arr3 = [];
      }else{
        arr3.push(i);
        break;
      }
    }
  }
 return arr3;
}

getUniqueNumbers(arr1,arr2);



