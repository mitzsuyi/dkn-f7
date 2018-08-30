import React from 'react';
import {
 Link,
 Searchbar
} from 'framework7-react';

export default ({show}) => {
  if(!show) return null  
  return (
      <div>
      <Link searchbarEnable=".searchbar" iconIos="f7:search_strong" iconMd="material:search">Search</Link>
       <Searchbar
         className="searchbar"
          searchContainer=".search-list"
          expandable
          searchIn=".question-text"
        ></Searchbar>
     </div>   
  )
}