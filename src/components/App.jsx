import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      firstVideo: exampleVideoData[0],
      listedVideos: exampleVideoData,
    };
  }

  componentDidMount() {
    this.getYouTubeVideos('cute kittens');
  }

  handleClick (video) {
    this.setState({
      firstVideo: video
    });
  }

  getYouTubeVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query,
      max: 5
    };

    this.props.searchYouTube(options, (videos) => {
      this.setState({
        listedVideos: videos,
        firstVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSearchInput={this.getYouTubeVideos.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
          <VideoPlayer video={this.state.firstVideo}/>
          </div>
          <div className="col-md-5">
          <VideoList videos={this.state.listedVideos} handleClick={this.handleClick.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;