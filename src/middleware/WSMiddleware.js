export default store => next => action => {
    if(action.WS) {
        console.log("has WS data");
    }
    else{
        console.log('does not have WS middleware');
    }
    return next(action);
}