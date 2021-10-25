//while(condition) {
    // // block of code
//}

//var num = 0

//while (num <= 50) {
   // num++
//}

//console.log(num)

for(i=0; i<=5; i++){
//code block
}

var array1 = [1,2,3,4,5,6]
var pos = 0

//for(pos; pos < array1.length; pos++){
    //console.log('Position => ' + pos + ' Value => ' +array1[pos])
//}

//for(pos; pos < array1.length; pos++){
    //if(pos >= 3) break
    //console.log('Position => ' + pos + ' Value => ' +array1[pos])
//}

for(pos; pos < array1.length; pos++){
    if(pos % 2 !== 0) continue
    console.log('Position => ' + pos + ' Value => ' +array1[pos])
}

