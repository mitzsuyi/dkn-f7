import React from 'react';
import {
    List,
    ListItem,
    Block
} from 'framework7-react';

const withSearchNotFound = (WrappedComponent) => (props) => {
  console.log('wrapped!!!', WrappedComponent)
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

export default withSearchNotFound