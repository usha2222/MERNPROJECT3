var listOfQue = JSON.parse(localStorage.getItem("questions"))
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
        <h1>${que.quesion}</h1>
        <h3>${que.a}</h3>
        <h3>${que.b}</h3>
        <h3>${que.c}</h3>
        <h3>${que.d}</h3>
        <h2> Answer is: ${que.ans}</h2>
    </div>
    `).join("")
}
function showTest() {
    document.body.innerHTML = listOfQue.map((que, i) => `
    <div style="box-shadow: 1px 1px 5px 1px gray; margin:25px; padding:25px">
        <h1>Question: ${que.quesion}</h1>
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
    document.body.innerHTML="<h1>"+score+"</h1>"
}