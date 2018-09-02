import React from 'react';

import {Row, Col } from 'framework7-react';

const QuestionRow =({iconCol, textCol, textColFn, className})=>{
   let text = textCol
   if (textColFn) text=textColFn()
    return <Row noGap><Col width="15">{iconCol}</Col><Col width="85" className={className}>{text}</Col></Row>
}
export default QuestionRow