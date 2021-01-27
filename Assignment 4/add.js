//Question no 2
//Write a javascript program that will take 2 numbers from the HTML page and display them on the
//HTML page after the addition of those 2 numbers.
function addNum(){
    var fNum=document.getElementById("firstNum");
    var sNum=document.getElementById("secNum");
    var result=parseInt(fNum.value) + parseInt(sNum.value)
    document.getElementById("result").value=result
}
