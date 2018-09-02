import React from 'react';
import {fetchRolePlayQuestions} from '../Api'
import BaseTabView from './BaseTabView'

const RolePlay = () => <BaseTabView fetchQuestions={fetchRolePlayQuestions}/>

export default RolePlay