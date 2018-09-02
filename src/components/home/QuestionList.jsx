import React from 'react';
import List from '../List'
import Question from './Question'
import {compose, withState, setPropTypes, withHandlers} from 'recompose'
import PropTypes from 'prop-types'

const propTypes = {
  questions: PropTypes.array.isRequired,
  toComponent: PropTypes.func.isRequired
}

const QuestionList = ({questions, toComponent}) => <List items={questions} toComponent={toComponent}/> 

const withToComponentHandler = withHandlers({
    toComponent: props=>(question, index)=> <Question index={index} key={index} question={question}/>
})

const enhance = compose(
  withToComponentHandler,
  setPropTypes(propTypes)
) 

export default enhance(QuestionList)
