import React from 'react';
import {Link} from 'framework7-react';

const QuestionLabel = ({question})=>{
   const text = question.question + '?'
   const isQa = question.mode === "qa"
   if(isQa){
     return <Link popoverOpen=".question-info-popup" text={text}></Link>
   } else{
    return text
   }
}

export default QuestionLabel