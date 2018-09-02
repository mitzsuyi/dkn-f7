import React from 'react';
import {
  Popover,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Button,
  BlockTitle,
  Block,
  Row,
  Label,
  Input,
  List,
  ListItem,
  Col
}from 'framework7-react';
import QuestionInfo from './QuestionInfo'

const AnswerPopupForm = ({question, id}) => (
 <Popover className={`answer-popup-form-${id}`}>
  <Card className="question-info">
    <CardHeader>{question.question}?</CardHeader>
    <CardContent>
     <List>
        <ListItem>
          <Label className="italic">Answer</Label>  
          <Input type="textarea" className="rounded-solid-border" />            
        </ListItem>
         
     </List>
     
    </CardContent>
    <CardFooter className="justify-content-center">
      <Block>
        <Row>
          <Button popoverClose={true} outline>
            Submit
          </Button>
        </Row>
      </Block>
    </CardFooter>
  </Card>
</Popover>

)

export default (AnswerPopupForm)