//Question 1:
const clothes = ['jacket', 't-shirt'];
clothes.length = 0;
console.log(clothes[0]);
//Output: undefined =>when we set the array length property to 0 all the elements in the array gets deleted


//Question 2
//Write a Javascript program to find the sum of all elements of a given array?
var arr=[1,2,3,4,5,6]
var result=0
for(var num=0; num<arr.length;num++){
   result+=arr[num];
}
console.log(result)

