import React from 'react';
import {
  Popover,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Button,
  Link,
  BlockTitle,
  Block,
  Row,
  List,
  ListItem,
  Col
}from 'framework7-react';
import QuestionInfo from './QuestionInfo'
import AnswerPopupForm from './AnswerPopupForm'
import { compose, withHandlers, setPropTypes} from 'recompose'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

const propTypes = {
  question: PropTypes.object.isRequired,
  onRef: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
}

const QuestionInfoPopup = ({question, onClick, onRef}) => (
 <div> 
 <Popover className="question-info-popup">
  <Card className="question-info">
    <CardHeader>{question.question}?</CardHeader>
    <CardContent>
      <QuestionInfo question={question} />
    </CardContent>
    <CardFooter className="justify-content-center">
      <Block>
        <Row className="justify-content-space-around">Approval</Row>
        <Row>
          <Button onClick={onClick} popoverOpen=".answer-popup-form"
             className="question-info-approve" outline>Yes</Button>
          <Button ref={onRef} popoverClose={true} outline>No</Button>
        </Row>
      </Block>
    </CardFooter>
  </Card>
</Popover>
<AnswerPopupForm question={question}/>  
</div>
)

const withApprovalButton = withHandlers(function(){
    let closeButton = React.createRef()
    return {
        onRef:props=>(ref) => closeButton = ref,
        onClick: props=>evt=>{
            ReactDOM.findDOMNode(closeButton).click(true)
        }
    }
}())
const enhance =compose(
  withApprovalButton,
  setPropTypes(propTypes)
)

export default enhance(QuestionInfoPopup)