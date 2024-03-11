function gradeCalculate(score){
    if(score >= 90 && score <= 100){
        return "A"
    } else if(score >= 80 && score <= 89){
        return "B"
    } else if(score >= 70 && score <= 79){
        return "C"
    } else if(score >= 60 && score <= 69){
        return "D"
    } else if(score >= 0 && score <= 59){
        return "F"
    } else{
        return ("Nothing")
    }
}

// Example usage
var studentScore = 100;

var grade = gradeCalculate(studentScore);

console.log("Students score: " +studentScore)

console.log("Grade: " + grade)