function Question(type,question){
    return {
        type: type,
        question: question
    }
}

function HospitalityQ(question) {
 return new Question("Hospitality", question)
}

const QUESTIONS = [
  HospitalityQ("What is Deep Knowledge Network"),
  HospitalityQ("Where can Deep Knowledge Network be used"),
  HospitalityQ("How will Deep Knowledge Network benefit you")
]

export {QUESTIONS}