// Grade Calculator

let gradeCalc = function (studentScore, totalScore) {
    if (typeof score !== 'number' || typeof totalScore !== 'number') {
        throw Error('must enter a number')
    }
        let gradePercent = (studentScore/totalScore) * 100
        let letterGrade = undefined
    
        if (gradePercent >= 80) {
            letterGrade = 'A'
        } else if (gradePercent >= 70) {
            letterGrade = 'B'
        } else if (gradePercent >= 60) {
            letterGrade = 'C'
        } else if (gradePercent >= 50) {
            letterGrade = 'D'
        } else {
            letterGrade = 'F'   
        }
    
    return `You got a ${letterGrade} (${gradePercent}%!)`
 
       



}
try {
    let grade = gradeCalc("sdsdf", 'sdf')
    console.log(grade)
} catch (e){
    console.log(e.message)
}
