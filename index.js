// add solution here
function theBeatlesPlay(musi, instru) {
  var newArr = [];
  for (var i = 0; i < musi.length; i++) {
  var str = `${musi[i]} plays ${instru[i]}`;
  newArr.push(str);
  }
  return newArr;
}

function johnLennonFacts(arr) {
  var newArr = [];
  var i = 0;
  while (i < arr.length)
  {
    var str = arr[i++] + '!!!';
    newArr.push(str);
  }
  return newArr;
}

function iLoveTheBeatles(x) {
    var newArr = [];
do {
  newArr.push('I love the Beatles!');
  x++; 
}
while (x < 15);
    return newArr;
}