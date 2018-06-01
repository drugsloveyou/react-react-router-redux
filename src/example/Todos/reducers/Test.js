const TestMsg = (state = '', action) => {
  switch (action.type) {
    case 'CONSOLE':
      return action.message
    default:
      return state
  }
}
export default TestMsg
