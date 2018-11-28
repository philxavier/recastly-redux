import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleSearchChange from '../actions/search.js';

// var SearchContainer = () => {

//     render () {
//         <Search/>
//     }
// };

const mapDispatchToProps = dispatch => {
    return {
      onChange: function(q){ return dispatch(handleSearchChange(q)}
    }
}

const mapStateToProps = state => {
    return {
        value: 
    }
}

var SearchContainer = connect(mapDispatchToProps, map...)(Search)

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer;
