let array = [1,2,3,4,5,6,7,8,9,10];
let arr = [];
array.forEach( item => {
	if( item % 2 == 0  ) {
  	arr.push(item);
  }
})
console.log(arr);

