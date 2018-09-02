import React from 'react'
import {Icon} from 'framework7-react'

const Hotel = "Hotel"
const Hospitality= "Hospitality"
const RolePlay="RolePlay"

function IconF(header, question){
    return {
        header: header,
        question: question
    }
}

const QUESTION_ICON = <span className="question-icon">?</span>

const Icons={
    [Hospitality]: IconF(
        <Icon ios="fa:heart-o" md="material:favorite_border"/>, 
        QUESTION_ICON
     ),
    [Hotel]: IconF(
        <Icon ios="fa:money" md="material:account_balance"/>, 
        <Icon ios="fa:align-left" md="material:format_align_center"/>, 
    ),
    [RolePlay]: IconF(
        <Icon ios="fa:heart-o" md="material:favorite_border"/>, 
        QUESTION_ICON
     )
}

const Types = [
Hospitality, 
Hotel,
RolePlay
].reduce((acc, current)=> {
    acc[current]=current 
    return acc
}, {})   

export {Types, Icons}