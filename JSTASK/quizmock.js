var QuestionArray = JSON.parse(localStorage.getItem("questions"));
var anss = [];
function saveQuestions() {
    var question = document.getElementById("questions").value;
    var option1 = document.getElementById("option1").value;
    var option2 = document.getElementById("option2").value;
    var option3 = document.getElementById("option3").value;
    var option4 = document.getElementById("option4").value;
    var answer = document.getElementById("answer").value;

    var StudentObject = {
        questions: question,
        option1: option1,
        option2: option2,
        option3: option3,
        option4: option4,
        answer: answer
    }
    //push the object into the array
    QuestionArray.push(StudentObject);
    localStorage.setItem("questions", JSON.stringify(QuestionArray));
    showQuestions();
}

function showQuestions() {
    var datainstring = localStorage.getItem("questions")
    // var answer = document.getElementById("answer")
    var QuestionArray = JSON.parse(datainstring)
    document.getElementById("show").innerHTML = QuestionArray.map((questions, i) =>
        `<div style="box-shadow: 1px 1px 5px 1px gray;
padding: 20px;margin: 20px;">
<h2>question:${questions.questions}</h2>
<h2>option1:${questions.option1}</h2>
<h2>option2:${questions.option2}</h2>
<h2>option3:${questions.option3}</h2>
<h2>option4:${questions.option4}</h2>
<h2>answer is:${questions.answer}</h2>
<button onclick="deleteStudent(${i})">Delete</button>

</div>`
    )
}
function deleteStudent(index) {
    var modifiedList = QuestionArray.splice(index, 1)
    localStorage.setItem("questions", JSON.stringify(QuestionArray))
    showQuestions();
}

function showTest() {
    document.body.innerHTML = QuestionArray.map((questions, i) => `
<div style="box-shadow: 1px 1px 5px 1px gray; margin:25px; padding:25px">
<h1>Question: ${questions.questions}</h1>
<input type="radio" onclick="selectOption(${i}, '${questions.option1}')" name="option${i}" />A. ${questions.option1} 
<input type="radio" onclick="selectOption(${i}, '${questions.option2}')" name="option${i}" />B. ${questions.option2} 
<input type="radio" onclick="selectOption(${i}, '${questions.option3}')" name="option${i}" />C. ${questions.option3} 
<input type="radio" onclick="selectOption(${i}, '${questions.option4}')" name="option${i}" />D. ${questions.option4} 

</div>
`).join("")
        + "<button style='margin-top:20px' onclick='submit()'>submit</button>"
}

function selectOption(index, ansValue) {
    anss[index] = ansValue
    console.log(anss)
}
function submit() {
    let score = 0;
    // console.log(anss, QuestionArray)
    for (var i = 0; i < QuestionArray.length; i++) {
        if (anss[i] == QuestionArray[i].answer) {
            score++
        }
    }
    document.body.innerHTML = "<h1>" + score + "</h1>"
}