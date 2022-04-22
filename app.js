// percent calculator
// function percentage(num, per) {
//     return (num / 100) * per;
// }

function caluculatePercentage() {
    var num = document.getElementById("onerepmax").value;
    var per = document.getElementById("per").value;
    var result = (num / 100) * per;
    document.getElementById("result").innerHTML = result;
}