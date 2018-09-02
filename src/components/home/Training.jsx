import React from 'react';
import {fetchTrainingQuestions} from '../Api'
import BaseTabView from './BaseTabView'

const Training = () => <BaseTabView fetchQuestions={fetchTrainingQuestions}/>

export default Training