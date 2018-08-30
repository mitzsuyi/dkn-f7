import React from 'react';
import {compose, withState, lifecycle} from 'recompose'
import Question from './Question'
import {fetchQuestions} from '../Api'

const withFetchQuestions = lifecycle({
  componentDidMount() {
    fetchQuestions().then(questions => {
      this.setState({questions} );
    })
  }
})

const QuestionList = ({questions}) =>  {
  return questions.map((question, index) =><Question key={index} question={question}/>)
}

const enhance = compose(
  withState('questions', 'setQuestions', []),
  withFetchQuestions
)

export default enhance(QuestionList)