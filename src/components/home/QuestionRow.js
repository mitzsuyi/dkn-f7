import React from 'react';

import {Row, Col } from 'framework7-react';

const QuestionRow =({iconCol, textCol, className})=>(
  <Row noGap><Col width="15">{iconCol}</Col><Col width="85" className={className}>{textCol}</Col></Row>
)

export default QuestionRow