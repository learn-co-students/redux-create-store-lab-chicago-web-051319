export default function createStore(reducer) {
  let state;
  //console.log(reducer)

  function getState(){
    return reducer(state , {type: '@@INIT'})
  }

  function dispatch(action){
    state = reducer(state , action)
    render()
  }

  return {getState , dispatch}
}

function render() {
  const container = document.getElementById('container');
}

