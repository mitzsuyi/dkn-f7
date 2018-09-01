import {QA,TRAINING} from './AppData'

const fetchQAQuestions  = ()=>{
   return new Promise((resolve, reject)=>{
    resolve(QA)
   })    
}

const fetchTrainingQuestions  = ()=>{
   return new Promise((resolve, reject)=>{
    resolve(TRAINING)
   })    
}

export {fetchQAQuestions, fetchTrainingQuestions}