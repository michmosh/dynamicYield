import constnats from '../constants/index';
function addVideo(payload){
    return{ type : constnats.ADD_VIDEO , payload : payload}
}
function loadedVideos(payload){
    return{ type : constnats.LOADED_VIDEOS , payload : payload}
}
function loadedFromStorage(payload){
    return{ type : constnats.LOADED_FROM_STORAGE , payload : payload}
}
function checkedStorage(payload){
    return{ type : constnats.CHECKED_STORAGE , payload : payload}
}
function showMessage(payload){
    return{ type : constnats.SHOW_MESSAGE , payload : payload}
}
function hideMessage(payload){
    return{ type : constnats.HIDE_MESSAGE , payload : payload}
}


export const actions = {
    addVideo,
    loadedVideos,
    loadedFromStorage,
    checkedStorage,
    showMessage,
    hideMessage
}