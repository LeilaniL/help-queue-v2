import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { HashRouter } from 'react-router-dom';
import { createStore } from 'redux';
import ticketListReducer from './reducers/ticket-list-reducer';
<<<<<<< HEAD
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';


const store = createStore(ticketListReducer);
=======
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';

const store = createStore(rootReducer);
>>>>>>> 3_2b_combining_reducers_in_react

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

const render = (Component) => {
  ReactDOM.render(
    <HashRouter>
      <Provider store={store}>
<<<<<<< HEAD
        <Component />
=======
        <Component/>
>>>>>>> 3_2b_combining_reducers_in_react
      </Provider>
    </HashRouter>,
    document.getElementById('react-app-root')
  );
};

render(App);

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
/*eslint-enable */
