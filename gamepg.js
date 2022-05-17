player1_score = 0;
player2_score = 0; 

player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

document.getElementById("player1_name").innerHTML = player1_name + " : "; 
document.getElementById("player2_name").innerHTML = player2_name + " : "; 

document.getElementById("player1_score").innerHTML= player1_score ; 
document.getElementById("player2_score").innerHTML= player2_score; 

document.getElementById("QuestionTurn").innerHTML = "Question Turn = " + player1_name; 
document.getElementById("AnswerTurn").innerHTML = "Answer Turn = " + player2_name; 

function send ()

{
    get_word = document.getElementById("word").value;
word = get_word.toLowerCase();
console.log("word in lowerCase = " + word);

char1 = word.charAt(1); 
console.log(char1); 


length = word.length; 
middle_character= Math.floor(length/2); 
char2 = word.charAt(middle_character); 
console.log(char2)

last_character = length - 1;
char3 = word.charAt(last_character);
console.log(char3);

final_word = word.replace(char1, "_");
final_word = final_word.replace(char2, "_"); 
final_word = final_word.replace(char3, "_"); 
console.log(final_word);

question_html = "<h4 id = 'word_display'> Q." + final_word + "<h4>"
input_box_html= "Answer : <input type='text' id='answer' class='form-control'>" 
check_button_html = " <br>  <button class = 'btn btn-success' onclick='check()'> Check </button>" 

row = question_html + input_box_html + check_button_html;
document.getElementById("output").innerHTML = row; 
document.getElementById("word").value = ""; 
} 
question_turn = "player1";
answer_turn = "player2";

function check ()

{
get_answer = document.getElementById("answer").value;
answer = get_answer.toLowerCase();
console.log("answer in lower case - " + answer)


if(word == answer)

{
    if(answer_turn == "player1")
    {
       player1_score = player1_score + 1; 
       document.getElementById("player1_score").innerHTML = player1_score;
    }

    else
    {
        player2_score = player2_score + 1; 
        document.getElementById("player2_score").innerHTML = player2_score; 
    }
}

if(question_turn == "player1")
{
    question_turn = "player2"; 
    document.getElementById("QuestionTurn").innerHTML = "Question Turn : " + player2_name; 

}
else
{
    question_turn = "player1"; 
    document.getElementById("AnswerTurn").innerHTML = "Answer Turn : " + player1_name;


}

if(answer_turn == "player1")
{
    answer_turn ="player2";
    document.getElementById("AnswerTurn").innerHTML = "Answer Turn : " + player2_name;
}

else
{
    answer_turn = "player1"; 
    document.getElementById("AnswerTurn").innerHTML = "Answer Turn : " + player1_name;
}

}



