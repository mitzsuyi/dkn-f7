import React from 'react';
import { Navbar, Page, Block, Tabs, Tab, Link, Toolbar } from 'framework7-react';

export default () => (
  <Page pageContent={false}>
    <Toolbar tabbar labels inner bottomMd={true}>
      <Link tabLink href="./" routeTabId="home" iconIos="f7:home" iconMd="material:home" tabLinkActive text="Home"></Link>
       <Link tabLink href="./task/" routeTabId="task" iconIos="f7:list" iconMd="material:assignment" text="Task"></Link>
      <Link tabLink href="./unfinished/" routeTabId="unfinished" iconIos="f7:more_vertical" iconMd="material:rotate_right" text="Unfinished"></Link>
        <Link tabLink href="./you/" routeTabId="you"  iconIos="f7:person" iconMd="material:person" text="You"></Link>
     </Toolbar>
    <Tabs routable>
      <Tab className="page-content" id="home"></Tab>
      <Tab className="page-content" id="task"></Tab>
      <Tab className="page-content" id="unfinished"></Tab>
      <Tab className="page-content" id="you"></Tab>
    </Tabs>
  </Page>
)
