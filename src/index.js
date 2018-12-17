import React, { Component } from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

import YTSearch from 'youtube-api-search';
 
const API_KEY = 'AIzaSyCUT4VhV-iiOBe6mTiN2IMoFwD-AljA6HQ';


class App extends Component {
  constructor(props){
    super(props);
    
    this.state =  { videos: [] };
    YTSearch({key: API_KEY, term: '먹방'}, (videos) => {
      this.setState( { videos });
      //this.setState({ videos : videos })
    });
  }
  render() {
    return ( 
      <div>
        <SearchBar />
        <VideoDetail video={ this.state.videos[0] } />
        <VideoList videos={ this.state.videos }/>
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector('.container'));