import {Types} from '../config'

let {Hospitality, Hotel, RolePlay} = Types

const INCENTIVE="Answer one question to get 10 token"
const HINT="Please select the word you think which is negative in meaning"

function Question(type,question, hint, incent, mode){
    return {
        type: type,
        question: question,
        hint: hint,
        incent: incent,
        mode: mode,
        info:{
          criteria: "Hotel, Concierge",
          review: "Above 100",
          reward: "1 token each replay",
          budget: "100 tokens",
          rating: 8.10
        }
    }
}

function RolePlayQ(question) {
 return Question(RolePlay, question, undefined, INCENTIVE)
}

const ROLE_PLAY=[
  RolePlayQ("You are a hotel receptionist"),
  RolePlayQ("You are a travel agent"),
  RolePlayQ("You are a retail store manager")
]

const MODE_QA="qa"

function HospitalityQ(question) {
 return Question(Hospitality, question, undefined, INCENTIVE, MODE_QA)
}

const QA = [
  HospitalityQ("What is Deep Knowledge Network"),
  HospitalityQ("Where can Deep Knowledge Network be used"),
  HospitalityQ("How will Deep Knowledge Network benefit you")
]

function HotelQ(question) {
 return Question(Hotel, question, HINT, INCENTIVE)
}

const TRAINING =[
    HotelQ("I think your price is a bit unclear"),
    HotelQ("Can you elaborate on the pricing"),
    HotelQ("Do you have any offers")
]

export {QA, TRAINING, ROLE_PLAY}