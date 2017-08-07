import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';

const API_KEY='AIzaSyDFuSqPK1rz986t7ykLi6syazyW6cCybmU';



//Functional Component
class App extends Component{
  
  constructor(props){
    super(props);
    
    this.state={videos:[],selectedVideo:null};
    
    this.videoSearch('surfboards');
  }
  
  videoSearch(term){
    YTSearch({key:API_KEY,term:term},(data)=>{
      this.setState({videos:data,selectedVideo:data[0]});
    });
  }
  
  render(){
    return (
      <div>
          <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
          <VideoDetail video={this.state.selectedVideo}/>
          <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos}/>
      </div>
    );
  }
}
