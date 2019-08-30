import { combineReducers } from 'redux';
import MenuReducer from './reducer_menu';

const rootReducer = combineReducers({   
    showMenu: MenuReducer
});

export default rootReducer;