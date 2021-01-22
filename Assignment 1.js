//Question no. 1
console.log(1 + "2" + "2");
//O/p:122
//the + sign works as concatenation when javascript finds a string value.
console.log(1 + +"2" + "2");
//O/p:32
//1 + +"2" addition takes place as operand in front of a string
//converts it to number and after addition concatenation operand gives output as 32
console.log(1 + -"1" + "2");
//O/p:02
//1 + -"1" substraction takes place as operand in front of a string
//converts it to number and after substraction concatenation operand gives output as 02
console.log(+"1" + "1" + "2");
//O/p:112
//+"1" gets converted into number and the contatenation get perform as the other values are strings which gives the above o/p
console.log( "A" - "B" + "2");
//O/p:NaN2
// - is Arithmetic Operators which cannot be perform on strings so it returns o/p as NaN(Not a Number) and concatenate the value 2
console.log( "A" - "B" + 2);
//O/p:NaN
// - is Arithmetic Operators which cannot be perform on strings and no arithmetic operation can be perform b/w string and number
// so it returns o/p as NaN(Not a Number)


//Question no. 2
var num =10
if(num>90){
    console.log("AA if the mark is greater than 90");
}else if((num>80) && (num<=90)){
    console.log("AB if the mark is greater than 80 and less than or equal to 90")
}else if((num>70) && (num<=80)){
    console.log("BB if the mark is greater than 70 and less than or equal to 80")
}else if((num>60) && (num<=70)){
    console.log("BC if the mark is greater than 60 and less than or equal to 70")
}else if((num>50) && (num<=60)){
    console.log("CC if the mark is greater than 50 and less than or equal to 60")
}else if((num>40) && (num<=50)){
    console.log("CD if the mark is greater than 40 and less than or equal to 50")
}else if((num>30) && (num<=40)){
    console.log("DD if the mark is greater than 30 and less than or equal to 40")
}else if(num<=30){
    console.log("FF if the mark is less than or equal to 30")
}