import React, { Component} from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

import './custom.css'

export default class App extends Component {
    static displayName = App.name;


  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/aboutMe' component={AboutMe} />
        <Route path='/projects' component={Projects} />
      </Layout>
    );
  }
}
