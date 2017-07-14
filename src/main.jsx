import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './reducers/RootReducer';
import FormInputText from './containers/FormInputText';
import TextLengthMessage from './containers/TextLengthMessage';


ReactDOM.render(
  <Provider store={store}>
    <TextLengthMessage />
    <FormInputText />
  </Provider>
  , document.getElementById('root'),
);
