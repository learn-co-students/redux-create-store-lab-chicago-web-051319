export default function createStore(reducer) {
  let state;
  //console.log(reducer)

  function getState(){
    // console.log(state , reducer)
    // return reducer(state , 'default') // there is something wrong here
    // // this should not be passing
    //const res = reducer(state , {type: 'ADD_CANDY'})
    return reducer(state , {type: '@@INIT'})
  }

  function checkState(){
    console.log(getState())
  }

  checkState()
  function dispatch(action){
    state = reducer(state , action)
    render()
  }

  return {getState , dispatch}
}

function render() {
  const container = document.getElementById('container');
}

