import React, { Component } from 'react';


/* funtional component
const SearchBar = () => {
  return <input />;
};
*/

class SearchBar extends Component{
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }
  render() {
    /* ES5: pass the event handler, 
    return <input onChange={ this.onInputChange } />;*/
    return (
    <div>
      <input
        value={this.state.term}
        onChange={(e) => this.setState({ term: e.target.value })}/>
    </div>
    );
  }
  /* ES5: declare event handler
  onInputChange(e){
    console.log(e.target.value);
  }*/
}

export default SearchBar;