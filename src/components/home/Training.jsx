import React from 'react';
import {compose, withState, setPropTypes, withHandlers} from 'recompose'
import {fetchTrainingQuestions} from '../Api'
import QuestionList from './QuestionList'
import withSearchNotFound from '../../hocs/withSearchNotFound'
import withFetcher from '../../hocs/withFetcher'
import PropTypes from 'prop-types'

const propTypes = {
  questions: PropTypes.array.isRequired,
}

const Training = ({questions}) => <QuestionList questions={questions}/> 

const withFetchQuestions = withFetcher(fetchTrainingQuestions, (questions, props)=>props.setQuestions(questions))
const withQuestionsState = withState('questions', 'setQuestions', [])

const enhance = compose(
  withQuestionsState,
  withFetchQuestions,
  setPropTypes(propTypes)
) 

export default enhance((Training))
