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


export default ({question}) => {
  return (
    <li>
     <Card className="question">
  <CardHeader
    className="no-border"
    valign="bottom"
  ><Link iconIos="f7:heart"  iconMd="material:favorite_border" text={question.type}></Link>
  </CardHeader>
  <CardContent className="question-text">  
   ? {question.question}?
  </CardContent>
  <CardFooter>
     <Link iconIos="f7:social_linkedin" iconMd="material:person_add" text="Join"></Link>
    <Link iconIos="f7:social_twitter" iconMd="material:all_inclusive" text="Follow"></Link>
     <Link iconIos="f7:share" iconMd="material:share" text="Share"></Link>
     
  </CardFooter>
</Card>
</li>
  
  )
}