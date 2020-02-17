import React from 'react'

import { Grid } from "@material-ui/core";

//<VideoList videos={videos} onVideoSelect={this.onVideoSelect} />

//import { SearchBar, VideoList, VideoDetail } from "./components";

import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

import youtube from "./api/Youtube";

class App  extends React.Component{
    
  state = {
    videos: [],
    selectedVideo: null,
  }

  componentDidMount(){
    this.handleSubmit('fazt web')
  }  

  onVideoSelect = (video) => {
   this.setState({ selectedVideo: video});
  }

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 7,
        key: 'AIzaSyBOBt2aaGRzyarvz21g0uzqOXP2u6jOaOE',
        q: searchTerm,

      }
    });
    
        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
}



    
    render() {
        const { selectedVideo, videos } = this.state;
        return (
          <Grid style={{ justifyContent: "center" }} container spacing={10}>
          <Grid item xs={11}>
            <Grid container spacing={10}>
              <Grid item xs={12}>
                <SearchBar onFormSubmit={this.handleSubmit} />
              </Grid>
              <Grid item xs={8}>
                <VideoDetail video={selectedVideo} />
              </Grid>
              <Grid item xs={4}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
  
   
        )
    }
}

export default App;