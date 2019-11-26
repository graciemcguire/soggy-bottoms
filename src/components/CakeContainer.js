import React, { Component } from 'react';
import CakeList from './CakeList'
import CakeFilter from './CakeFilter'
import sear from './SearchForm'

export default class CakeContainer extends Component {

  render(){
    return (
      <div className="CakeContainer">
        <CakeFilter />
        <CakeList />
      </div>
    )
  }
}
