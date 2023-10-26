const questions = document.querySelectorAll("#arrow");
const answers = document.querySelectorAll(".answer");

questions.forEach((question, index) => {
    question.addEventListener("click", () => {
        if (answers[index].style.display == "block") {
            answers[index].style.display = "none";
        } else {
            answers[index].style.display = "block";
        }
    });
});