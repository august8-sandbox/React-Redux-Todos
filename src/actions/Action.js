import { createAction } from 'redux-actions';
import { TEXT_LENGTH } from '../constants/ActionTypes';

const actionTextLength = createAction(TEXT_LENGTH, text => (text.length()));

export default actionTextLength;
