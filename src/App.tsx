import { RouterProvider } from 'react-router-dom'
import { MainRouter } from './router/MainRouter'
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store } from './Global/store';



let persistor = persistStore(store);


const App = () => {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={MainRouter} />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;