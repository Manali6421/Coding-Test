var obj = [
    {"id" : 4, "name" : "abc"},
    {"id" : 10, "name" : "ab2"},
    {"id" : 5, "name" : "ab3"},
    {"id" : 6, "name" : "ab5"},
];

let arrId = [];
obj.forEach(info => {
    Object.keys(info).forEach( item => {
        if ( item === 'id' ){
            arrId.push(info[item]);
        }  
    })
    
});
console.log(arrId.sort(function(a, b){return a-b}));


   