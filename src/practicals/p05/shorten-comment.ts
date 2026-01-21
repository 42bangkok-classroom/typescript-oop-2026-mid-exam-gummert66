export{};
const comment = "TypeScript is a strongly typed programming language"

function shortenComment(comment: string): string {
  // Write your code below
  const commentArray = comment.split(" ")
  for(let i = 0; i < commentArray.length;i++ ){
    if (commentArray[i].length >= 5 && commentArray[i].length <= 10){
      console.log(commentArray[i]);
    }else {
      console.log("");
    }
  }
  let result = commentArray.toString();
  return result;
} 

shortenComment("TypeScript is a strongly typed programming language");

