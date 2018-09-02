import React from 'react';
import {
  App,
  View,
  Statusbar
} from 'framework7-react';

import routes from '../routes';

export default function (props) {

  // Framework7 parameters here
  const f7params = {
    id: 'com.phonegap.dkn', // App bundle ID
    name: 'DKN', // App name
    theme: 'ios', // Automatic theme detection
    // App routes
    routes
  };

  return (
    <App params={f7params}>
      {/* Statusbar */}
      <Statusbar />
      {/* Main View */}
      <View id="main-view" url="/" main className="ios-edges"/>     
    </App>
  );
};
