let array = [1,0,1,1,0,1,1,1,0,0];
let count = 0;
let max = 0;
array.forEach( item => {
	if( item == 0 ) {
  	count = 0;
    } else {
        count++;
    max = count > max ? count : max;
    }
})
console.log(max);
