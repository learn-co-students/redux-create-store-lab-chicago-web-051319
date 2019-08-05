import countReducer from './reducers/countReducer'
import candyReducer from './reducers/candyReducer'

export default function createStore(reducer) {
  let state;

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
    render();
  }
  dispatch({ type: '@@INIT' })
  return {dispatch, getState};
}

function render() {
  // const container = document.getElementById('container');

}

// let candyStore = createStore(countReducer)
// let countStore = createStore(candyReducer)
//
// candyStore.dispatch({ type: '@@INIT' })
// countStore.dispatch({ type: '@@INIT' })
//
// console.log("STATE ",candyStore.getState());
// console.log("STATE ",countStore.getState());
