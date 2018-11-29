import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

 
var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!
  console.log('reducerMain:', q);
  var options = {
    key: YOUTUBE_API_KEY,
    query: q
  };

  return (dispatch) => {
    searchYouTube(options, (videos) => {
      console.log('data: ', videos)
      dispatch(changeVideoList(videos));
    });
  }

};

export default handleVideoSearch;



