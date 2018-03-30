import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyCDgi-hYJvss3-5PQVDimdXvRKB6UPAyEs';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};

		YTSearch({key: API_KEY, term: 'Taylor Swift'}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			});
			//When the name is same we can write as above. When key and property have same name.
			// It will get resolved as: this.setState({ videos: videos }); (es6 syntax)
		});
	}
	render() {
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
				onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
				videos={this.state.videos} />
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector('.container'));