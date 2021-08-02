player1 = localStorage.getItem("savePlayer_name1");
player2 = localStorage.getItem("savePlayer_name2")

player1_score = 0;
player2_score = 0;

document.getElementById("player_1").innerHTML = player1 + ':'
document.getElementById("player_2").innerHTML = player2 + ':'

document.getElementById("score_1").innerHTML = player1_score;
document.getElementById("score_2").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question turn = " + player1;
document.getElementById("player_answer").innerHTML = "Answer turn = " + player2;

function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;

    actual_anwer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + "X" + number2 + "</h4>"
    input_box = "<br> Answer : <input type='text' id='input_check_box'>"
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = " "
    document.getElementById("number2").value = " "
}

