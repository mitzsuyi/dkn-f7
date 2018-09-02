import {QA,TRAINING, ROLE_PLAY} from './AppData'

const fakeFetch = (result) =>{
   return new Promise((resolve, reject)=>{
    resolve(result)
   })    
}

const fetchQAQuestions = ()=> fakeFetch(QA)
const fetchTrainingQuestions  = ()=> fakeFetch(TRAINING)
const fetchRolePlayQuestions  = ()=> fakeFetch(ROLE_PLAY)

export {fetchQAQuestions, fetchTrainingQuestions, fetchRolePlayQuestions}