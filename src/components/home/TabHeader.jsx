import React from 'react';

import {
  Row,
  Block,
  Link,
  Tabs, 
  Page,
  Tab,
  BlockHeader 
} from 'framework7-react';

import QA from './QA'
import RolePlay from './RolePlay'
import Training from './Training'

import TabLink from './TabLink'

import { compose, lifeCycle, withHandlers} from 'recompose'

const TQA="qa"

const TabHeader = ({hasList, setActiveTab}) =>  {
 return(
  <Page>
  <Block strong>
  <BlockHeader>
  <Row>
    <TabLink onClick={setActiveTab} link={"#"+TQA} active={true}>QA</TabLink>
    <TabLink onClick={setActiveTab} link="#role-play">Role play</TabLink>
    <TabLink onClick={setActiveTab} link="#training">Training</TabLink>
  </Row>
  </BlockHeader>
  </Block>
    <Tabs>
    <Tab id="qa" className="page-content" tabActive>
      <QA title="foo"/> 
    </Tab>
    <Tab id="role-play" className="page-content">
      <RolePlay/>
    </Tab>
    <Tab id="training" className="page-content">
     <Training/>
    </Tab>
  </Tabs> 
  </Page>
  )
}


const enhance = compose(
    withHandlers({
      setActiveTab: props=> tab => {
        console.log(tab,TQA)
        props.hasList(tab == TQA)
      }  
    })
)

export default enhance(TabHeader)