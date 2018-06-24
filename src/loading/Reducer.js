import { START_LOADING, END_LOADING } from './Actions'


export default function Loading (state = false, action = {}) {
  switch (action.type) {
    case START_LOADING:
      return action.payload.status
    case END_LOADING:
      return action.payload.status
    default:
      return state
  }
}
