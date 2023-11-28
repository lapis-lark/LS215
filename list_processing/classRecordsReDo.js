/*
  IN: object of objects containing student id and exam/exercise scores
  OUT: object containing:
          grade for each student (with letter grade)
          average, minimum, and maximum score on each exam

  DATA: arrays (convert object to array so it can be iterable)
        objects
        numbers
  ALGO: 
        exam info:
          group exams
          iterate over exams to find min/max score
          use reduce to get average score
        get average exam score (make function for getting average)
        get average exercise score
        pass two scores into function that weights the final grade appropriately
*/

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

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

// returns:
({
  studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
  exams: [
    { average: 75.6, minimum: 50, maximum: 100 },
    { average: 86.4, minimum: 70, maximum: 100 },
    { average: 87.6, minimum: 60, maximum: 100 },
    { average: 91.8, minimum: 80, maximum: 100 },
  ],
})