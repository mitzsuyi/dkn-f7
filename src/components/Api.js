import {QUESTIONS} from './AppData'

const fetchQuestions  = ()=>{
   return new Promise((resolve, reject)=>{
    resolve(QUESTIONS)
   })    
}

export {fetchQuestions}