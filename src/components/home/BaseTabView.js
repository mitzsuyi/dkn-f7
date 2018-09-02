import React from 'react';
import {compose, withState, setPropTypes, withHandlers} from 'recompose'
import QuestionList from './QuestionList'
import withSearchNotFound from '../../hocs/withSearchNotFound'
import withFetcher from '../../hocs/withFetcher'
import PropTypes from 'prop-types'

const propTypes = {
  questions: PropTypes.array.isRequired,
  fetchQuestions: PropTypes.func.isRequired
}

const BaseTab = ({questions, fetchQuestions}) => <QuestionList questions={questions}/> 

const withFetchQuestions = withFetcher((props)=>props.fetchQuestions(props), (questions, props)=>props.setQuestions(questions))
const withQuestionsState = withState('questions', 'setQuestions', [])

const enhance = compose(
  withQuestionsState,
  withFetchQuestions,
  setPropTypes(propTypes)
) 

export default enhance((BaseTab))
