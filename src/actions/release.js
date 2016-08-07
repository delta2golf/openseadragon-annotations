import types from '../constants/actionTypes';
import modes from '../constants/modes';

export default function release(Dispatcher, Store) {
  switch (Store.getMode()) {

    case modes.DRAW:
      Dispatcher.dispatch({
        type: types.ACTIVITY_UPDATE,
        inProgress: false,
      });
      break;

  }
}
