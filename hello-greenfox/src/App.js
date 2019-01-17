import React, { Component } from 'react';
import BuyAcorn from '../redux/containers/buyacorn';
import DisplayAcorn from '../redux/containers/display';
import EatAcorn from '../redux/containers/eatacorn';

const App = () => (
  <main>
    <BuyAcorn />
    <DisplayAcorn />
    <EatAcorn />
  </main>
)

export default App;
