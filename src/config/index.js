import React from 'react'
import {Icon} from 'framework7-react'

const Hotel = "Hotel"
const Hospitality= "Hospitality"

function IconF(header, question){
    return {
        header: header,
        question: question
    }
}

const Icons={
    [Hospitality]: IconF(
        <Icon ios="f7:heart" md="material:favorite_border"/>, 
        <Icon ios="f7:help" md="material:help_outline"/>, 
     ),
    [Hotel]: IconF(
        <Icon ios="f7:money_euro" md="material:account_balance"/>, 
        <Icon ios="f7:document_text" md="material:format_align_center"/>, 
    )
}

const Types = [
Hospitality, 
Hotel
].reduce((acc, current)=> {
    acc[current]=current 
    return acc
}, {})   

export {Types, Icons}