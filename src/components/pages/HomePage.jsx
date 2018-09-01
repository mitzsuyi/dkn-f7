import React from 'react';
import {
    Page,
    Navbar,
    NavLeft,
    NavRight,
    Link,
    Subnavbar,
    Icon
} from 'framework7-react';

import TabHeader from '../home/TabHeader'
import SearchHeader from '../home/SearchHeader'

import { compose, renderComponent,  withHandlers, withState} from 'recompose'

const Home = ({showList, hasList}) =>{  
   return(
  <Page >
    <Navbar>
      <NavLeft>
        <Link iconIos="f7:menu" iconMd="material:menu"></Link>
      </NavLeft>
      <NavRight>
        <Link iconIos="f7:bell" iconMd="material:notifications"></Link>
      </NavRight>
  </Navbar>    
     <Subnavbar>
      <SearchHeader show={showList} />
      <Link iconIos="f7:settings" iconMd="material:wifi_tethering"></Link>
      <Link iconIos="f7:add_round" iconMd="material:add_circle_outline">Ask</Link>
     </Subnavbar>

     <TabHeader hasList={hasList}/>  
  </Page>
  )
}

const enhance = compose(
  withState('showList', 'setShowList', true),
  withHandlers({
    hasList: props=> has => {
      props.setShowList(has)
    }
  })
)

export default enhance(Home)
