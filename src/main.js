$(document).ready(function() {
  var questionNumber = 0;
  var quiz = [
    {
      qno: 1,
      question: "Who did Ross marry?",
      options: {
                1: "Phoebe, Rachel and Carol",
                2: "Rachel, Emily and Carol",
                3: "Carol, Emily and Susan"
              },
      answer: 2
    },{
      qno: 2,
      question: "Where were the gang heading to when Phoebe's water broke?",
      options: {
                1: "Atlantic City",
                2: "Las Vegas",
                3: "London"
              },
      answer: 3
    },{
      qno: 3,
      question: "Who bumped Ben's head?",
      options: {
                1: "Joey",
                2: "Ross",
                3: "Monica"
              },
      answer: 3
    },{
      qno: 4,
      question: "Who became lovers in Barbados?",
      options: {
                1: "Charlie and Ross/Rachel and Joey",
                2: "Phoebe and Chandler/Ross and Charlie",
                3: "Rachel and Joey/Monica and Chandler"
              },
      answer: 1
    }
  ];

  $('.scratchPad2').css('visibility','hidden');

  startQuiz = function() {
    $('.scratchPad1').css('display','none');
    $('.scratchPad2').css('visibility','visible');
    $('.scratchPad2 .sno').html(quiz[0].qno+")  ")
    $('.scratchPad2 .question').html(quiz[0].question).css('display','inline-block');
    for(var j=0; j<$('.scratchPad2 .options div input').length; j++) {
      var elem = $('.scratchPad2 .options div div.opt')[j];
      elem.innerHTML += " "+quiz[0].options[j+1];
    }
  }

  checkAnswer = function(){
    var selectedValue = $('.scratchPad2 .options div input[type=radio]:checked').val();
    if(selectedValue==quiz[questionNumber].answer) {
      $('.scratchPad2 .answer').html("Your answer is correct");
    } else {
      $('.scratchPad2 .answer').html("Sorry! The correct answer is "+quiz[questionNumber].options[quiz[questionNumber].answer]);
    }

  }


});
