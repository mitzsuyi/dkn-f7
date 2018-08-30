import React from 'react';
import {compose, lifecycle} from 'recompose'

import {
    List,
    ListItem,
    Block
} from 'framework7-react';

import QuestionList from './QuestionList'

const QA = () => <QuestionList/> 

const withSearchNotFound = (WrappedComponent) => (props) => {
  return(
    <div>
     <List className="searchbar-not-found">
      <ListItem title="Nothing found" />
    </List>
    <Block className="search-list searchbar-found">
    <WrappedComponent {...props}/>
    </Block>
   </div>
  )
}

const enhance = compose(
    withSearchNotFound
)    
export default enhance(QA)
