function every(array, predicate) {
  if(arr.length===0){return true;}
  else{
    for(let i = 0; i<arr.length; i++){
      if(!predicate(arr[i])){
        return false;
      }
    }
    return true;
  } 
}

function every2(array, predicate) {
  return !array.some(element => !predicate(element));
}
