let hello = [[1,1,1,0,0,0],[0,1,0,0,0,0],[1,1,1,0,0,0],[0,0,2,4,4,0],[0,0,0,2,0,0],[0,0,1,2,4,0]];

/*
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0
*/

function hourglassSum(arr) {
    // Write your code here

  let maxValue = 0;

  console.log(arr[0][0]);
  
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let currentHourglass = (arr[i][j]+ arr[i][j+1]+ arr[i][j+2])+(arr[i+1][j+1])+(arr[i+2][j]+arr[i+2][j+1]+arr[i+2][j+2]);

      if( currentHourglass > maxValue){
        maxValue = currentHourglass;
      }
    }
  }

  return maxValue;

}

console.log(hourglassSum(hello));
