// var listOfQue = JSON.parse(localStorage.getItem("questions"))
var listOfQue = JSON.parse(localStorage.getItem("questions"))
var listOfQue = JSON.parse(localStorage.getItem("questions")) ?? []
var anss = [];
var currentIndex = 0;
var score = 0;

var userListRegistration = JSON.parse(localStorage.getItem("registerstudent")) ?? []
var FacultyListRegistration = JSON.parse(localStorage.getItem("registerfaculty")) ?? []
var h1 = document.getElementById("h1")

function userRegister() {
    var uname = document.getElementById("uname").value;
    var password = document.getElementById("password").value
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;
    var branch = document.getElementById("branch").value;
    var city = document.getElementById("city").value;
    var message = document.getElementById("msg");
    var userObject = {
        username: uname,
        password: password,
        mobile: mobile,
        email: email,
        city: city,
        branch: branch
    }
    if (uname == "") {
        return message.innerHTML = "Enter uname";
    }
    if (password == "") {
        message.innerHTML = "Enter password";
        return
    }
    if (branch == "") {
        message.innerHTML = "Enter branch";
        return
    }
    if (city == "") {
        message.innerHTML = "Enter city";
        return
    }
    if (mobile == "") {
        message.innerHTML = "Enter mobile";
        return
    }
    if (email == "") {
        message.innerHTML = "Enter email";
        return
    }
    else if (uname != "", password != " ", branch != "", city != "", mobile != "", email != "") {
        // alert("login failed")
        message.innerHTML = "registration sucess";
    }
    else {
        message.innerHTML = "registration failed";
    }
    
    //push the object into the array
    userListRegistration.push(userObject);
    localStorage.setItem("registerstudent", JSON.stringify(userListRegistration))
    // studentLogin();
    loginas();
}
function facutlyRegistration() {
    var uname = document.getElementById("uname").value;
    var password = document.getElementById("password").value
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;
    var branch = document.getElementById("branch").value;
    var city = document.getElementById("city").value;
    var message = document.getElementById("msg");
    var facultyObject = {
        username1: uname,
        password: password,
        mobile: mobile,
        email: email,
        city: city,
        branch: branch
    }
    if (uname == "") {
        return message.innerHTML = "Enter uname";

    }
    if (password == "") {
        message.innerHTML = "Enter password";
        return
    }
    if (branch == "") {
        message.innerHTML = "Enter branch";
        return
    }
    if (city == "") {
        message.innerHTML = "Enter city";
        return
    }
    if (mobile == "") {
        message.innerHTML = "Enter mobile";
        return
    }
    if (email == "") {
        message.innerHTML = "Enter email";
        return
    }
    else if (uname != "", password != " ", branch != "", city != "", mobile != "", email != "") {
        // alert("login failed")
        message.innerHTML = "registration sucess";
    }
    else {
        message.innerHTML = "registration failed";
    }

    //push the object into the array
    FacultyListRegistration.push(facultyObject);
    localStorage.setItem("registerfaculty", JSON.stringify(FacultyListRegistration));
    console.log(JSON.parse(localStorage.getItem(registerfaculty)))
    loginas();
}
// function listStudent(){
// userListRegistration.push()
// }

function showStudentData() {
    var datainstring = localStorage.getItem("register")
    var userListRegistration = JSON.parse(datainstring)
    document.getElementById("userdata").innerHTML = userListRegistration.map((student, i) =>
        `<div style="box-shadow: 1px 1px 5px 1px gray;
padding: 20px;margin: 20px;">
<h1>Username:${student.username}</h1>
<h1>Password:${student.password}</h1>
<h1>Branch${student.branch}</h1>
<h1>Mobile:${student.mobile}</h1>
<h1>Email:${student.email}</h1>
<h1>City:${student.city}</h1>
<button onclick="deleteStudent(${i})">Delete</button>
</div>`
    )

}
function loginAsStudent() {
    // var uname, pwd;
    var uname = document.getElementById("uname").value;
    // var username;/
    var pwd = document.getElementById("pwd").value;
    var h1Ele = document.getElementById("msg")
    var ValueOfStudent = JSON.parse(localStorage.getItem("registerstudent"))
    console.log(ValueOfStudent)
    var checked = JSON.parse(localStorage.getItem("registerstudent").includes(username = uname));
    console.log(checked)
    var checkedpassword = JSON.parse(localStorage.getItem("registerstudent").includes(password = pwd));

    if (username == "") {
        h1Ele.innerHTML = "Please fill the username";
        return;
    }
    if (pwd == "") {
         h1Ele.innerHTML = "Please fill the password";
         

    }
    if (checked == true && checkedpassword == true) {
         alert("login successfully as Student")
         h1Ele.innerHTML = "Login successful as Student";
         return StartQuiz()
    }

    else {
        return h1Ele.innerHTML = "Login failed";
    }

}

function insertquizQuestion(){
document.body.innerHTML=`<div style=" height:100vh; background-color: black; color: white; display:flex; justify-content:center; flex-direction:column; text-align:center;  font: 900; font-size: xx-large;"><a href="insertquestion.html">Insert Questions</a></div>`
 
}
function StartQuiz(){

document.body.innerHTML=`<div style="height:100vh; background-color: black; color: white; display:flex; justify-content:center; flex-direction:column; text-align:center; font: 900; font-size: xx-large;"><a href="q.html">Start Quiz</a></div>`

}
function loginASFaculty() {
    // var uname, pwd;
    var unameF = document.getElementById("uname").value;

    var pwd= document.getElementById("pwd").value;
    var h1Ele = document.getElementById("msg")
    var ValueOfFaculty = JSON.parse(localStorage.getItem("registerfaculty"))
    console.log(ValueOfFaculty)
    var checked1 = JSON.parse(localStorage.getItem("registerfaculty").includes(username1 = unameF));
    // console.log(checked1)
    var checkedpassword1 = JSON.parse(localStorage.getItem("registerfaculty").includes(password = pwd));

    if (unameF == "") {
        h1Ele.innerHTML = "Please fill the username";
        return;
    }
    if (pwd == "") {
        h1Ele.innerHTML = "Please fill the password";
        
       

    }
    if (checked1 == true && checkedpassword1 == true) {
        alert("login successfully as Faculty")

        //   h1Ele.innerHTML = "Login successful as Faculty";
         return insertquizQuestion()
    }

    else {
        return h1Ele.innerHTML = "Login failed";
    }
}

function loginas() {
    var login = document.getElementById("login")
    login.innerHTML = `<div style="background-color: blue; color:white; align-item-center;
  height: 40px; text-align: center; width:  100px; border:1px solid gray;
  border:1px solid rgb(176, 134, 134); border-radius:20%;"><a href="login.html">login</a></div>`

}

// var listOfQue = JSON.parse(localStorage.getItem("questions"))
var currentIndex = 0;
var score = 0;
function saveQue() {
    let que = document.getElementById('que').value
    let op1 = document.getElementById('op1').value
    let op2 = document.getElementById('op2').value
    let op3 = document.getElementById('op3').value
    let op4 = document.getElementById('op4').value
    let ans = document.getElementById('ans').value

    var question = {
        quesion: que,
        a: op1,
        b: op2,
        c: op3,
        d: op4,
        ans: ans
    }
    listOfQue.push(question)
    localStorage.setItem("questions", JSON.stringify(listOfQue))
    // showQuestions()
}

function showQuestions() {
    listOfQue = JSON.parse(localStorage.getItem("questions"))
    document.getElementById("show").innerHTML = listOfQue.map((que,i) => `
    <div style="box-shadow: 1px 1px 5px 1px gray; margin:25px; padding:25px">
        <h1>${que.quesion}</h1>
        <h3>${que.a}</h3>
        <h3>${que.b}</h3>
        <h3>${que.c}</h3>
        <h3>${que.d}</h3>
        <h2> Answer is: ${que.ans}</h2>
        <button style="border-radius: 20px; padding:5px; background-color:gray; width:100px; margin:12px" onclick="deleteStudent(${i})">Delete</button>
    </div>

    `).join("")
}
// function showTest() {
//     document.body.innerHTML = listOfQue.map((que, i) => `
//     <div style="box-shadow: 1px 1px 5px 1px gray; margin:25px; padding:25px">
//         <h1>Question: ${que.quesion}</h1>
//         <input type="radio" onclick="selectOption(${i}, '${que.a}')" name="option${i}" />A. ${que.a} 
//         <input type="radio" onclick="selectOption(${i}, '${que.b}')" name="option${i}" />B. ${que.b} 
//         <input type="radio" onclick="selectOption(${i}, '${que.c}')" name="option${i}" />C. ${que.c} 
//         <input type="radio" onclick="selectOption(${i}, '${que.d}')" name="option${i}" />D. ${que.d} 
        
//     </div>
//     `).join("")
//         + "<button style='margin-top:20px' onclick='submit()'>submit</button>"
// }
//  var currentIndex=0;
function setQuestion() {
    var question = listOfQue[currentIndex]
    document.getElementById("qno").innerHTML = currentIndex +0;
    document.getElementById("que").innerHTML = question.quesion
    document.getElementById("op1").innerHTML = question.a
    document.getElementById("op2").innerHTML = question.b
    document.getElementById("op3").innerHTML = question.c
    document.getElementById("op4").innerHTML = question.d
}
// function selectOption(index, ansValue) {
//     anss[index] = ansValue
//     console.log(anss)
// }
function submit() {
    // var score = 0;
    // console.log(anss, listOfQue)
    // for (var i = 0; i < listOfQue.length; i++) {

    //     if (anss[i] == listOfQue[i].ans) {
    //         score++
    //     }
    // }
    document.body.innerHTML = `<div>Your Score is  ${score} </div>`
}

function next() {
    if (currentIndex < listOfQue.length) {
        currentIndex++
        setQuestion()
    } else {
        document.body.innerHTML = `<h1 style="font-size: x-large;"> Your Score is  ${score}</h1>`
        alert(" your Score is=" + score)
    }

}
function check() {
    var radioButtons = document.getElementsByName("options")
    var op1Value = document.getElementById("op1").innerText
    var op2Value = document.getElementById("op2").innerText
    var op3Value = document.getElementById("op3").innerText
    var op4Value = document.getElementById("op4").innerText
    for (var i = 0; i < 4; i++) {
        var button = radioButtons[i]
        if (i == 0 && button.checked) {
            if (listOfQue[currentIndex].ans == op1Value) {
                score++
            }
        }
        if (i == 1 && button.checked) {
            if (listOfQue[currentIndex].ans == op2Value) {
                score++
            }
        }
        if (i == 2 && button.checked) {
            if (listOfQue[currentIndex].ans == op3Value) {
                score++
            }
        }
        if (i == 3 && button.checked) {
            if (listOfQue[currentIndex].ans == op4Value) {
                score++
            }
        }
    }
}

function deleteStudent(index) {
    var modifiedList = listOfQue.splice(index, 1)
    localStorage.setItem("questions", JSON.stringify(listOfQue))
    showQuestions();
}

