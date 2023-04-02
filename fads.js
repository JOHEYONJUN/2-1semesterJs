var addTwoNumbers = function(l1, l2) {
    
    l1.reverse();
    l2.reverse();
    l1.toString();
    l2.toString();
    for(let i = 0; i < l1.length; i++ ){
        a += l1[i];
    };
    for(let j = 0; j < l2.length; j++ ){
        b += l2[j];
    };

    let c = Number(a) + Number(b);

    const str = String(c);

    const mapfn = (arg) => Number(arg);

    const newArr = str.split('').map(mapfn);

    return newArr;

};


var a = [9,9,9,9,9,9,9];
var b = [9,9,9,9];
console.log(addTwoNumbers(a,b));