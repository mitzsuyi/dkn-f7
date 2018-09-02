import React from 'react';
import {Link} from 'framework7-react';

const QuestionLabel = ({question, id})=>{
   const text = question.question + '?'
   const isQa = question.mode === "qa"
   if(isQa){
     return <Link popoverOpen={`.question-info-popup-${id}`} text={text}></Link>
   } else{
    return text
   }
}

export default QuestionLabel