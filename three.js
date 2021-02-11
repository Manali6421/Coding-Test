let array = [0,1,2,3,4,5,6,7,7,8,9,10];

for(let i = 0; i<array.length; i++) {
    for(let j = i+1; j<array.length; j++) {
        if( array[i] == array[j] ) {
            console.log(array[j]);
        }
    }
}