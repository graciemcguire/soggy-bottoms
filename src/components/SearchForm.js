import React, { Component } from 'react';

export default class SearchForm extends Component {
  render(){
    return (
      <form className='search'>
        <input
          className='form'
          type='text'
          value={ '' }
          onChange={ '' }
          placeholder={ 'Find a cake' }
        />
      </form>
    )
  }
}
