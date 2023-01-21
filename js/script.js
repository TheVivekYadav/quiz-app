let question_counter = -1;
let number_of_question = 5;

document.getElementById('prev').addEventListener('click', event => {

    if (event.target.innerHTML == "Prev") {
        question_counter -= 1;
    }
});
document.getElementById('next').addEventListener('click', event => {

    if (event.target.innerHTML == "Next") {
        question_counter += 1;
    }

});
function state() {

    console.log(question_counter)

    $.getJSON("..//json/data.json",
        function (json) {

            if (question_counter > 4) {
                $('.question').text("Thanks you Check your Result");
                $('.op1').text("");
                $('.op2').text("");
                $('.op3').text("");
                $('.op4').text("");
                question_counter = number_of_question;
            }
            else if (question_counter>=0){
                $('.question').text(json[question_counter].question);
                $('.op1').text(json[question_counter].option1);
                $('.op2').text(json[question_counter].option2);
                $('.op3').text(json[question_counter].option3);
                $('.op4').text(json[question_counter].option4);

            }
            else{
                question_counter = 0;
            }
        });
}