function getElement(id) {

    return document.getElementById(id);

}

function gotoNextQuestion(){
    
    pos = pos + 1;

    console.log(score);
    
   
    if(pos >= listOfQuestions.length){
        endQuiz();
    }else{
        createAQuestion();
    }  
    
}

function changeProgressBar(){
    jQuery("progressbar")
}

function addRadioListener(){

    getElement("choiceSubmit").removeAttribute("disabled");
}

function checkAnswer(){

    var checkedOption = jQuery("#questionslide input:checked").val()

    // console.log("checkedOption", checkedOption === listOfQuestions[pos]["answer"]);

    $("#questionslide input").attr('disabled', true);

    if(checkedOption === listOfQuestions[pos]["answer"]){

        // jQuery("#questionslide input:checked+label").css("color", "green")
        jQuery("#questionslide input:checked").parent().css("background-color", "#c1d89f").css("color", "#23a216")

        score++;

        jQuery("<p>Correct answer! To know more <a href='"+reference+"' target='_blank'>click here</a></p>" ).fadeIn("slow")
        .appendTo( "div.referencemsg" );

    }else{
        
        // jQuery("#questionslide input:checked+label").css("color", "red");

        jQuery("#questionslide input:checked").parent().css("background-color", "#facdbf").css("color", "#d02417")

        jQuery("#questionslide input").each(function(){
            
            if (jQuery(this).val() === listOfQuestions[pos]["answer"]) {
               
                jQuery(this).parent().css("background-color", "#c1d89f").css("color", "#23a216")
                // jQuery(this).next().css("color", "green")

            }

        });

        jQuery("<p>Incorrect answer! To know more <a href='"+reference+"' target='_blank'>click here</a></p>" ).fadeIn("slow")
        .appendTo( "div.referencemsg" );
    }


    addRadioListener();
    
    
}

function endQuiz() {

    quiz = getElement("quiz_endcover");
    endscore = getElement("scorecounter");
    // jQuery("#quiz_cover").addClass("hidden")
    // jQuery("#questionslide").removeClass("hidden")
    jQuery("#questionslide").addClass("hidden")
    jQuery("#quiz_endcover").removeClass("hidden")
    endscore.innerHTML = "<span>"+score+"</span>/"+listOfQuestions.length;
    // quiz.innerHTML += "<p>Score"+score+"</p>";
}

function createAQuestion() {

    quiz = getElement("quiz_content");
    quiz_status = getElement("quizstatus")
    quiz.innerHTML = "";

    jQuery("#choiceSubmit").attr("disabled","disabled");
    

    question = listOfQuestions[pos]["questions"];
    description = listOfQuestions[pos]["description"];
    leadVisual = listOfQuestions[pos]["leadvisual"];
    choiceA = listOfQuestions[pos]["choiceone"];
    choiceB = listOfQuestions[pos]["choicetwo"];
    choiceC = listOfQuestions[pos]["choicethree"];
    choiceD = listOfQuestions[pos]["choicefour"];
    reference = listOfQuestions[pos]["reference"];


    //Add the Question
    // quiz.innerHTML = "<h3>" +  + "</h3>";
    // quiz.innerHTML += "<header> HEADLINE OF QUIZ GOES HERE </header>"
    quiz.innerHTML += "<div class='row clearfixsol'><img class='fade-in' src='" + leadVisual + "' /><h3>"+question+"</h3></div>"
    quiz.innerHTML += "<div class='row clearfixsol'><div class='col col1 quizcounter'> <p>Score</p> <p><span>"+score+"</span>/"+listOfQuestions.length+"</p> </div> <div class='col col2 choices'> <label for='choA'><input onclick='checkAnswer()' type='radio' name='choices' value='A'> " + choiceA + "</label><br> <label for='choB'><input onclick='checkAnswer()' type='radio' name='choices' value='B'> " + choiceB + "</label><br><label for='choC'> <input onclick='checkAnswer()' type='radio' name='choices' value='C'> " + choiceC + "</label><br> <label for='choC'> <input onclick='checkAnswer()' type='radio' name='choices' value='D'> " + choiceD + "</label><br> <div class='referencemsg'></div></div></div>";
    // quiz.innerHTML += "<div class='row clearfixsol'><div class='col col1'> <p>Points</p> <p><span>"+score+"</span>/"+listOfQuestions.length+"</p> </div> <div class='col col2'> <input onclick='checkAnswer()' type='radio' name='choices' value='A'> <label for='choA'>" + choiceA + "</label><br> <input onclick='checkAnswer()' type='radio' name='choices' value='B'> <label for='choB'>" + choiceB + "</label><br> <input onclick='checkAnswer()' type='radio' name='choices' value='C'> <label for='choC'>" + choiceC + "</label><br> <input onclick='checkAnswer()' type='radio' name='choices' value='D'> <label for='choC'>" + choiceD + "</label><br> <div class='referencemsg'></div></div></div>";

    // quiz.innerHTML += "<div class='row clearfixsol footer'><p class='pull-left width50'>Q"+(pos+1)+" of "+listOfQuestions.length+"</p><button onclick='gotoNextQuestion()' class='pull-right width50 next fade-in' disabled='disabled' id='choiceSubmit'>Next &raquo;</button> </div>";
    quiz_status.innerHTML = "<span>Q"+(pos+1)+"</span> of "+listOfQuestions.length;

    var calcProgress = ((pos+1) / listOfQuestions.length) * 100;

    console.log("calcProgress", calcProgress);

    jQuery(".progressbarfull").css("width", calcProgress+"%");
    


    
} // end createAQuestion()

