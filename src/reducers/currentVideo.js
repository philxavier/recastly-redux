import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  switch(action.type){
    case 'CHANGE_VIDEO':
      var resultObj = {};
      Object.assign(resultObj, state, {video: action.video}); 
      return resultObj.video;
    default:
      return state;
  }
};

export default currentVideoReducer;
