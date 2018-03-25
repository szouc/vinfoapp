const Machine = (state, effects) => {
  let machineState = state
  // transition state to another state or keep on
  function transition(state, operation) {
    const currentState = state.currentState
    const nextState = state.states[currentState][operation]
      ? state.states[currentState][operation]
      : currentState
    return { ...state, currentState: nextState }
  }
  // input the action to transition
  function operation(name) {
    machineState = transition(machineState, name)
  }
  // get the current state
  function getCurrentState() {
    return machineState.currentState
  }
  // output the effect
  const getEffect = name => (...arg) => {
    operation(name)
    return effects[machineState.currentState](...arg)
  }
  return { operation, getCurrentState, getEffect }
}

export default Machine
