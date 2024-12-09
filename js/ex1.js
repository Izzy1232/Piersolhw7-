console.log("Piersol's Output from HW 6 Example 1");

const questions = [
  {
  statement: "2+2?",
  answer: "2+2 = 4"
  },
  {
  statement: "In which year did Christopher Columbus discover America?",
  answer: "1492"
  },
  {
  statement:
  "What occurs twice in a lifetime, but once in every year, twice in a week but never in a day?",
  answer: "The E letter"
  }
  ];
  
  const showQuestions = () => {
    let dl = document.createElement("dl")
  
    questions.forEach(q => {
      let dt = document.createElement("dt")
      dt.innerHTML = `${q.statement}`
  
      let dd = document.createElement("dd")
      dd.style.display = "none"
      dd.textContent = q.answer
  
      let button = document.createElement("button")
      button.textContent = "Show the answer"
  
      button.addEventListener("click", () => {
        dd.style.display = "block"
        button.style.display = "none"
      })
      dl.appendChild(dt)
      dl.appendChild(button)
      dl.appendChild(dd)
    })
  
    document.getElementById("content").appendChild(dl)
  }
  
  showQuestions()
  

