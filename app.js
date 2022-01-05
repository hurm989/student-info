var studentOne = {
    rollNo: 1,
    name: "Hurmat",
    fatherName: "Mohammad Janab Khan",
    contactNo: "0322-2232423",
    result: "pass",
}

var studentTwo = {
    rollNo: 2,
    name: "Sara",
    fatherName: "Ali",
    contactNo: "0322-2234223",
    result: "pass",
}


var studentThree = {
    rollNo: 3,
    name: "hur",
    fatherName: "Khan",
    contactNo: "0322-2329423",
    result: "fail",
}



var studentFour = {
    rollNo: 4,
    name: "Ali",
    fatherName: "Khan",
    contactNo: "0332-1235333",
    result: "pass",
}


var studentFive = {
    rollNo: 5,
    name: "Ayesha",
    fatherName: "xyz",
    contactNo: "0321-2445233",
    result: "fail",
}

var std = document.getElementById("StudentInClass");
var studentList = [studentOne, studentTwo, studentThree, studentFour, studentFive];

for (i = 0; i < studentList.length; i++) {
    var obj = studentList[i];
    std.innerHTML += '<tr><td>' + obj.rollNo + '</td><td>' + obj.name + '</td><td>' + obj.fatherName + '</td><td>' + obj.result + '</td><td>' + obj.contactNo + '</td></tr>'
}

var a = document.getElementById("search");
var rollNo=document.getElementById("rollNo");
var Name=document.getElementById("Name");
var fName=document.getElementById("fName");
var result=document.getElementById("result");
var contact=document.getElementById("contact");
function search() {
    for (i = 0; i < studentList.length; i++) {
        if (a.value == studentList[i].rollNo){
            console.log(studentList[i]);
            rollNo.innerHTML=studentList[i].rollNo;
            Name.innerHTML=studentList[i].name;
            fName.innerHTML=studentList[i].fatherName;
            result.innerHTML=studentList[i].result;
            contact.innerHTML=studentList[i].contactNo;
            break;
        }
    }
}