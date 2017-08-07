import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY='AIzaSyDFuSqPK1rz986t7ykLi6syazyW6cCybmU';

class App extends Component{
	constructor(props){
		super(props);

		this.state={videos:''};

		YTSearch({key:API_KEY,term:'surfboards'},(videos) => {
			console.log(videos);
			this.setState={videos};
		});

		render(){
			<SearchBar/>
			<VideoList videos={this.state.videos}/>
		}
	}
}

ReactDOM.render(<App/>,document.querySelector('.container'));