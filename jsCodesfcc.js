//titlecase string

function titleCase(str) {
    str = str.toLowerCase();
    str = str.split(" ");
    
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
  
    return str.join(" ");
  }
  
  titleCase("I'm a little tea pot");


  //copy arr1 into arr2 using slice and splice

  function frankenSplice(arr1, arr2, n) {

    let newarr2 = arr2.slice();
   newarr2.splice(n, 0,...arr1);
  
    return newarr2;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);


  function frankenSplice(arr1, arr2, n) {
    let combinedArrays = arr2.slice()
    for (let i = 0; i < arr1.length; i++) {
      combinedArrays.splice(n, 0, arr1[i])
      n++
    }
    return combinedArrays
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);


  function sumAll(arr) {

    let maxnum = Math.max(arr[0], arr[1]);
  let minnum = Math.min(arr[0], arr[1]);
  let temp = 0;
  
  for(let i = minnum; i <= maxnum; i++) {
    temp += i;
  }


  return temp;
}
  