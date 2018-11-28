import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App.js';
import searchYouTube from './lib/searchYouTube.js';
import YOUTUBE_API_KEY from './config/youtube.js';
import store from './store/store.js';
import { Provider } from 'react-redux';
import reducers from './reducers'; // this exports rootReducer!!!


//TODO: Import the Provider component from 'react-redux' here!
// const createStoreWithMiddleware = applyMiddleware()(createStore);
//TODO: Use the Provider component to make your store available to
//  the rest of your app.

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App API_KEY={YOUTUBE_API_KEY} searchYouTube={searchYouTube} />
  </Provider>
  document.getElementById('app')
  
);
