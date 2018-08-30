import React from 'react';

import {Link} from 'framework7-react';

const TabLink = ({link, onClick, children}) =>{
   return(
     <Link onClick={(e)=> onClick(link.replace(/#/,''))} tabLink={link}>{children}</Link>
  )
}

export default TabLink