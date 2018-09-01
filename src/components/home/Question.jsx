import React from 'react';

import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
    Icon,
    Link,
    Label
} from 'framework7-react';

import {Icons} from '../../config'
import QuestionRow from './QuestionRow'

export default ({question}) => {
  const icon = Icons[question.type]
  const content = [ 
     <QuestionRow className="question-question" iconCol={icon.question} textCol={question.question}/>
  ]
  question.hint && content.push(<QuestionRow className="question-hint" textCol={question.hint}/>)
  question.incent && content.push(<QuestionRow className="question-incent" textCol={question.incent}/>)

  return (
    <li>
     <Card className="question">
  <CardHeader
  >  <span>{icon.header} {question.type}</span>
  <Link iconIos="f7:close" className="close" iconMd="material:close"/>
  </CardHeader>
  <CardContent className="question-text">  
    {content}
  </CardContent>
  <CardFooter>
     <Link iconIos="f7:tape_fill" iconMd="material:person_add" text="Join"/>
    <Link iconIos="f7:social_twitter" iconMd="material:all_inclusive" text="Follow"></Link>
     <Link iconIos="f7:share" iconMd="material:share" text="Share"></Link>
     
  </CardFooter>
</Card>
</li>
  
  )
}