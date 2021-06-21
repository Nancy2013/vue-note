const checkArray = (arr) => Array.isArray(arr);

const data = [1,2,1,2,3];

function getRepeat(arr){
  if (!checkArray(arr)) return;
  const res = {};
  let count=0;
  let num=[];
  for (let i = 0; i < arr.length; i++) {
      if(!res[arr[i]]){
          res[arr[i]] = 1;
      }else{
          res[arr[i]] ++;
      }
  };
  const keys = Object.keys(res);

  for(let j=0;j<keys.length;j++){
    if(res[keys[j]] === count){
      num.push(parseInt(keys[j]));
    }
    
    if(res[keys[j]] > count){
      num=[];
      count = res[keys[j]]
      num.push(parseInt(keys[j]));
    }
  }
  return{
    count,
    num,
  }
}   

const {count,num}=getRepeat(data)
console.log('Number: ' + num + ' Count: ' + count);