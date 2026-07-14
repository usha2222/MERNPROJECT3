var listOfQue = JSON.parse(localStorage.getItem("questions"))
var currentIndex = 0;
var score = 0;
setQuestion()    ;    
function setQuestion() {
    var question = listOfQue[currentIndex]
    document.getElementById("qno").innerHTML = currentIndex + 1;
    document.getElementById("que").innerHTML = question.quesion
    document.getElementById("op1").innerHTML = question.a
    document.getElementById("op2").innerHTML = question.b
    document.getElementById("op3").innerHTML = question.c
    document.getElementById("op4").innerHTML = question.d
}
function next() {
    if (currentIndex < listOfQue.length) {
        currentIndex++
        setQuestion()
    }else{
        document.body.innerHTML=`<h1>Your score is${score}</h1>`
        alert("no more questions and your Score is="+score)
    }
}
var anss = []
// showQuestions()
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
    showQuestions()
}
function showQuestions() {
    listOfQue = JSON.parse(localStorage.getItem("questions"))
    document.getElementById("show").innerHTML = listOfQue.map((que) => `
    <div style="box-shadow: 1px 1px 5px 1px gray; margin:25px; padding:25px">
        <h4>QUESTION${que.quesion}</h4>
        <h3>A.${que.a}</h3>
        <h3>B.${que.b}</h3>
        <h3>C.${que.c}</h3>
        <h3>D.${que.d}</h3>
        <h2> Answer is: ${que.ans}</h2>
    </div>
    `).join("")
}
function showTest() {
    document.body.innerHTML = listOfQue.map((que, i) => `
    <div style="box-shadow: 1px 1px 5px 1px gray; margin:25px; padding:25px">
        <h4>Question: ${que.quesion}</h4>
        <input type="radio" onclick="selectOption(${i}, '${que.a}')" name="option${i}" />A. ${que.a} 
        <input type="radio" onclick="selectOption(${i}, '${que.b}')" name="option${i}" />B. ${que.b} 
        <input type="radio" onclick="selectOption(${i}, '${que.c}')" name="option${i}" />C. ${que.c} 
        <input type="radio" onclick="selectOption(${i}, '${que.d}')" name="option${i}" />D. ${que.d} 
        
    </div>
    `).join("") 
    + "<button style='margin-top:20px' onclick='submit()'>submit</button>"
}

function selectOption(index, ansValue){
    anss[index]=ansValue
    console.log(anss)
}
function submit() {
    let score = 0;
    console.log(anss,listOfQue)
    for(var i =0;i<listOfQue.length;i++){
        if(anss[i]==listOfQue[i].ans){
            score++
        }
    }
}
function check(){
    var radioButtons = document.getElementsByName("options")
    var op1Value = document.getElementById("op1").innerText
    var op2Value = document.getElementById("op2").innerText
    var op3Value = document.getElementById("op3").innerText
    var op4Value = document.getElementById("op4").innerText
    for(var i=0;i<4;i++){
        var button = radioButtons[i]
        if(i==0 && button.checked){
            if(listOfQue[currentIndex].ans==op1Value){
                score++
            }
        }
        if(i==1 && button.checked){
            if(listOfQue[currentIndex].ans==op2Value){
                score++
            }
        }
        if(i==2 && button.checked){
            if(listOfQue[currentIndex].ans==op3Value){
                score++
            }
        }
        if(i==3 && button.checked){
            if(listOfQue[currentIndex].ans==op4Value){
                score++
            }
        }
        
    }
}