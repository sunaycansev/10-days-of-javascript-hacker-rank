function getGrade(score) {
  let grade;

  return score > 25 && score <= 30
    ? (grade = "A")
    : score > 20
    ? (grade = "B")
    : score > 15
    ? (grade = "C")
    : score > 10
    ? (grade = "D")
    : score > 5
    ? (grade = "E")
    : score > 0 && score <= 5
    ? (grade = "F")
    : (grade = "");
}
