export function dataReducer(currentState = {fetching: false}, action) {
  switch (action.type) {
    case 'FETCHING_DATA':
      return {
        ...currentState,
        fetching: true,
      }
    default:
      return currentState;
  }
}
