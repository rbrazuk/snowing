import { TOGGLE_MENU } from '../actions';

export default function(state = false, action) {
    switch (action.type) {
      case TOGGLE_MENU:
        return action.payload;;
      default:
        return state;
    }
  }