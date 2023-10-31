const questions = document.querySelectorAll("#arrow");
const answers = document.querySelectorAll(".answer");

questions.forEach((question, index) => {
    question.addEventListener('click', () => {
        answers.forEach((answer , index2)=>{
            if(index === index2){
                if(answer.style.display === "block"){
                    answer.style.display = "none"
                }
                else{
                    answer.style.display = "block"
                }      
            }
            else{
                answer.style.display = "none"
            }
        })

    })
});