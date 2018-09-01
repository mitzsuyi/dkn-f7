import {Types} from '../config'

console.log('types',Types)
let {Hospitality, Hotel} = Types

function Question(type,question, hint, incent){
    return {
        type: type,
        question: question,
        hint: hint,
        incent: incent
    }
}

function HospitalityQ(question) {
 return Question(Hospitality, question)
}

const QA = [
  HospitalityQ("What is Deep Knowledge Network"),
  HospitalityQ("Where can Deep Knowledge Network be used"),
  HospitalityQ("How will Deep Knowledge Network benefit you")
]

const INCENTIVE="Answer one question to get 10 token"
const HINT="Please select the word you think which is negative in meaning"

function HotelQ(question) {
 return Question(Hotel, question, HINT, INCENTIVE)
}

const TRAINING =[
    HotelQ("I think your price is a bit unclear"),
    HotelQ("Can you elaborate on the pricing"),
    HotelQ("Do you have any offers")
]

export {QA, TRAINING}