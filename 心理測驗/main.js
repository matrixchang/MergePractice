$(document).ready(function(){
    var currentQuiz=null;
    $("#startButton").click(function()
    {
        if(currentQuiz==null)
        {
            currentQuiz=0;
            $("#question").text(questions[0].question);
            $("#options").empty();
            for(var x=0;x<questions[0].answers.length;x++)
            {
                $("#options").append( "<input name='options' type='radio' value="+x+">"+"<label>"+questions[0].answers[x][0]+"</lable><br><br>");    
            }
            $("#startButton").attr("value","Next");
        }
    else
    { 
        $.each($(":radio"),function(i,val){
            if(val.checked)
            {
                if(isNaN(questions[currentQuiz].answers[i][1]))
                    {
                        var finalResult = questions[currentQuiz].answers[i][1];
                        $("#question").text(finalAnswers[finalResult][0]);
                        $("#options").empty();
                        $("#options").append(finalAnswers[finalResult][1]+"<br><br>");
                        currentQuiz=null;
                        $("#startButton").attr("value","重新開始");
                    }
                else
                    {
                        currentQuiz=questions[currentQuiz].answers[i][1]-1;
                        $("#question").text(questions[currentQuiz].question);
                        $("#options").empty();
                        for(var x=0 ; x<questions[currentQuiz].answers.length;x++)
                        {
                           $("#options").append("<input name='options' type='radio' value="+x+">"+"<label>"+questions[currentQuiz].answers[x][0]+"</label><br><br>");
                        }
                    }
                return false;
            }
        });
        }
    });
});