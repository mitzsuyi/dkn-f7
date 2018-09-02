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

import { compose, setDisplayName, lifeCycle, setPropTypes, withState, withHandlers} from 'recompose'
import PropTypes from 'prop-types'

const propTypes = {
  hasList: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  currentTab: PropTypes.string.isRequired
}

const TQA="qa"

const TabHeader = ({hasList, currentTab, onClick}) =>  {
 return(
  <Page>
  <Block strong>
  <BlockHeader>
  <Row>
    <TabLink onClick={onClick} currentTab={currentTab} link={"#"+TQA}>Q&A</TabLink>
    <TabLink onClick={onClick} currentTab={currentTab} link="#role-play">Role play</TabLink>
    <TabLink onClick={onClick} currentTab={currentTab} link="#training">Training</TabLink>
  </Row>
  </BlockHeader>
  </Block>
    <Tabs>
    <Tab id="qa" className="page-content" tabActive={true}>
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

const withCurrentTabState = withState("currentTab","setCurrentTab", TQA)

const enhance = compose(
    setDisplayName("TabHeader"),
    withCurrentTabState,
    withHandlers({
      onClick: props => tab => {
         props.setCurrentTab(tab)
         props.hasList(tab)
      },
      setHasList: props=> tab => {
        props.hasList(tab == TQA)
      }  
    }),
    setPropTypes(propTypes)
)

export default enhance(TabHeader)