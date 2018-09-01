import React from 'react';
import {compose, withState, setPropTypes, withHandlers} from 'recompose'
import {fetchQAQuestions} from '../Api'
import QuestionList from './QuestionList'
import withSearchNotFound from '../../hocs/withSearchNotFound'
import withFetcher from '../../hocs/withFetcher'
import PropTypes from 'prop-types'

const propTypes = {
  questions: PropTypes.array.isRequired,
}

const QA = ({questions}) => <QuestionList questions={questions}/> 

const withFetchQuestions = withFetcher(fetchQAQuestions, (questions, props)=>props.setQuestions(questions))
const withQuestionsState = withState('questions', 'setQuestions', [])

const enhance = compose(
  withQuestionsState,
  withFetchQuestions,
  setPropTypes(propTypes)
) 

export default enhance((QA))
