let state = {count: 0}

function changeState(state={count:0}, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}

let action = {type: 'INCREASE_COUNT'}



function render(){
    document.setInnerHTML = state.count
}

function dispatch(action){
  state = changeState(state, action)
  render()
}
// render()

dispatch({type: 'INCREASE_COUNT'})
// => 1
dispatch({type: 'INCREASE_COUNT'})
// => 2
dispatch({type: 'INCREASE_COUNT'})
// => 3
