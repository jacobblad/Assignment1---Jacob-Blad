var submit = document.getElementById("SubmitButton");


submit.addEventListener("click", function () {

    var iPercentGrade = 0;
    var sLetterGrade = "";

    iPercentGrade = (((document.getElementById("a").value) * .5) +
        ((document.getElementById("gp").value) * .1) +
        ((document.getElementById("q").value) * .1) +
        ((document.getElementById("e").value) * .2) +
        ((document.getElementById("i").value) * .1));

    if (iPercentGrade < 60) {
        sLetterGrade = "E";
    } else if (iPercentGrade < 64) {
        sLetterGrade = "D-";
    } else if (iPercentGrade < 67) {
        sLetterGrade = "D";
    } else if (iPercentGrade < 70) {
        sLetterGrade = "D+";
    } else if (iPercentGrade < 74) {
        sLetterGrade = "C-";
    } else if (iPercentGrade < 77) {
        sLetterGrade = "C";
    } else if (iPercentGrade < 80) {
        sLetterGrade = "C+";
    } else if (iPercentGrade < 84) {
        sLetterGrade = "B-";
    } else if (iPercentGrade < 87) {
        sLetterGrade = "B";
    } else if (iPercentGrade < 90) {
        sLetterGrade = "B+";
    } else if (iPercentGrade < 94) {
        sLetterGrade = "A-";
    } else {
        sLetterGrade = "A";
    }
    ;

    alert("Final Percentage: " + iPercentGrade + "%" +
        "\n" + "Final Grade: " + sLetterGrade);

});