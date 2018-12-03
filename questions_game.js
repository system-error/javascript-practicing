var Question = function(question, answers, coranswer) {
    this.question = question;
    this.answers = answers;
    this.coranswer = coranswer;
}

Question.prototype.questions = function() {
    console.log(this.question);
    for (var i = 0; i < this.answers.length; i++) {
        console.log(i + ':' + this.answers[i]);
    }
}

var question1 = new Question('Is the number 10 even or odd number?', ['odd', 'even'], 1);

var question2 = new Question('What is the color when the traffic light says to stop? ', ['green', 'orange', 'red'], 2);

var question3 = new Question('How many legs has a dog', [1, 2, 3, 4], 3);

question1.questions();

var allTheAnswers = [question1, question2, question3];

var randomQuestions = Math.floor(Math.random() * allTheAnswers.length);

var getTheAnswer = prompt('Please answer the question.If you want to close the game type exit');


console.log(getTheAnswer);
