import React from 'react';
import {compose, setPropTypes} from 'recompose'
import PropTypes from 'prop-types'
import {
    Block,
    Row,
    Col,
    Icon
} from 'framework7-react'
import inflection from 'inflection'

const propTypes = {
  question: PropTypes.object.isRequired,
}

const THUMBS_UP_ICON = <Icon ios="fa:thumbs-o-up" md="material:thumb_up"/>
const THUMBS_DOWN_ICON = <Icon ios="fa:thumbs-o-down" md="material:thumb_down"/>
    
const ratingIcon = (rating)=> {
    return (rating >= 0) ? THUMBS_UP_ICON : THUMBS_DOWN_ICON
}

const QuestionInfo = ({question})=> {
    const question_info = Object.assign({},question.info)
    const rating = question_info.rating || 0
    delete question_info.rating
    const info = Object.entries(question_info).map((entry, index)=>{
        let [key, value]=entry
        return <p key={index}><span className="question-info-label">{inflection.titleize(key)}</span>:<span className="question-info-text">{value}</span></p>
    })
    return <Block>
        <Row>
            <Col className="col-75-i">{info}</Col>
            <Col className="col-25-i">
                <Block className="question-info-rating">
                    <Row>{rating}</Row>
                    <Row>{ratingIcon(rating)}</Row>
                </Block>
            </Col>            
       </Row>
    </Block>
}

export default QuestionInfo