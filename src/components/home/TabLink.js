import React from 'react';

import {Link} from 'framework7-react';

const TabLink = ({link, onClick, currentTab, children}) =>{
    const id = link.replace(/#/,'')
    console.log(id, 'active?', id === currentTab)
   return(
     <Link className="home-nav-tab" onClick={(e)=> onClick(id)} tabLinkActive={id === currentTab} tabLink={link}>{children}</Link>
  )
}

export default TabLink