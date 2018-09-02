import React from 'react';

import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
    Link
} from 'framework7-react';

import {Icons} from '../../config'
import QuestionRow from './QuestionRow'
import QuestionInfoPopup from './QuestionInfoPopup'
import QuestionLabel from './QuestionLabel'


const Question = ({question, index}) => {
  const icon = Icons[question.type]
  const isQa = question.mode === "qa"
  const content = [ 
      <QuestionRow key={0} className="question-question" iconCol={icon.question} textColFn={()=>(<QuestionLabel question={question}/>)}/>
  ]
  question.hint && content.push(<QuestionRow key={1} className="question-hint" textCol={question.hint}/>)
  question.incent && content.push(<QuestionRow key={2} className="question-incent" textCol={question.incent}/>)
  content.push(<QuestionInfoPopup key={3} question={question}/>)
  return (
    <li>
     <Card className="question">
  <CardHeader>  <span>{icon.header} {question.type}</span>
  <Link iconIos="fa:times" className="close" iconMd="material:close"/>
  </CardHeader>
  <CardContent className="question-text">  
    {content}
  </CardContent>
  <CardFooter>
     <Link iconIos="fa:user-plus" iconMd="material:person_add" text="Join"/>
    <Link iconIos="fa:google-plus" iconMd="material:all_inclusive" text="Follow"></Link>
     <Link iconIos="fa:share-alt" iconMd="material:share" text="Share"></Link>
  </CardFooter>
</Card>
</li>
  
  )
}

export default Question