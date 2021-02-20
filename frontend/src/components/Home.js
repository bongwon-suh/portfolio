import React from 'react';
import Project from './Project';
import Summary from './Summary';
import Awards from './Awards';
import Stacks from './Stacks';
import Education from './Education';
import Contact from './Contact';

const home = () => (
  <main>
    <Summary />
    <Project />
    <Awards />
    <Stacks />
    <Education />
    <Contact />
  </main>
);

export default home;
