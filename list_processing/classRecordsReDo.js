const EXAM_WEIGHT = .65;
const EXERCISE_WEIGHT = .35;

function generateStudentGrades(scores) {
  let studentGrades = [];
  let students = Object.entries(scores).map(student => student[1].scores);
  students.forEach(student => {
    studentGrades.push([average(student.exams), average(student.exercises)]);
  })

  studentGrades = studentGrades.map(student => {
    let grade = (student[0] * EXAM_WEIGHT) + (student[1] * EXERCISE_WEIGHT * 5);
    return grade.toFixed(1);
  })

  return studentGrades;
}

function groupScoresByTest(studentScores) {
  let groupedTests = [];
  for (let i = 0; i < studentScores[1].length; i += 1) {
    groupedTests.push([]);
  }

  studentScores.forEach((scoreSet) =>  {
    scoreSet.forEach((score, index) => { groupedTests[index].push(score) }) 
  })

  return groupedTests;
}

function getScores(scores) {
  let scoreArrays = {
                      exams: [],
                      exercises: [],
                    };

  Object.entries(scores).forEach(student => {
    scoreArrays.exams.push(student[1].scores.exams);
    scoreArrays.exercises.push(student[1].scores.exercises);
  })

  return scoreArrays;
}

function average(numArr) {
  return numArr.reduce((sum, ele) => { return sum + ele }, 0) / numArr.length;
}

function compareNums(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }

  return 0;
}

function getExamStats(exams) {
  let stats = [];
  exams.forEach(exam => {
    let sorted = exam.sort(compareNums);
    let ave = Number(average(exam).toFixed(2));
    let maximum = sorted.slice(-1)[0];
    let minimum = sorted[0];

    stats.push({ave, minimum, maximum})
  })

  return stats;
}



function generateClassRecordSummary(scores) {
  let scoreArrays = getScores(scores);
  let {exams, exercises} = scoreArrays;

  let groupedExams = groupScoresByTest(exams);
  let examStats = getExamStats(groupedExams);
  let studentGrades = generateStudentGrades(scores);

  return {studentGrades, examStats};
}

console.log(generateClassRecordSummary(studentScores));