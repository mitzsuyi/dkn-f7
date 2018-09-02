import React from 'react';
import {fetchQAQuestions} from '../Api'
import BaseTabView from './BaseTabView'

const QA = () => <BaseTabView fetchQuestions={fetchQAQuestions}/>

export default QA