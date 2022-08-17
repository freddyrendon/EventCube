import { combineReducers } from 'redux';

import entitiesReducer from './entities_reducer';
import sessionReducer from './session';
import errorsReducer from './errors_reducer';
// import uiReducer from './ui/ui_reducer';

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    // ui: uiReducer,
    errors: errorsReducer
});

export default rootReducer;