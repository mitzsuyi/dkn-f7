import React from 'react';
import { Navbar, Page, Block, Tabs, Tab, Link, Toolbar } from 'framework7-react';

export default () => (
  <Page pageContent={false}>
    <Toolbar tabbar labels inner bottomMd={true}>
      <Link tabLink href="./" routeTabId="home" iconIos="fa:home" iconMd="material:home" tabLinkActive text="Home"></Link>
       <Link tabLink href="./task/" routeTabId="task" iconIos="fa:list-alt" iconMd="material:assignment" text="Task"></Link>
      <Link tabLink href="./unfinished/" routeTabId="unfinished" iconIos="fa:hourglass-half" iconMd="material:rotate_right" text="Unfinished"></Link>
        <Link tabLink href="./you/" routeTabId="you"  iconIos="fa:user-circle" iconMd="material:person" text="You"></Link>
     </Toolbar>
    <Tabs routable>
      <Tab className="page-content" id="home"></Tab>
      <Tab className="page-content" id="task"></Tab>
      <Tab className="page-content" id="unfinished"></Tab>
      <Tab className="page-content" id="you"></Tab>
    </Tabs>
  </Page>
)
