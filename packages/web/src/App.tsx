import React, { Suspense } from 'react';
import { RelayEnvironmentProvider } from 'react-relay';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { store, userPersistor } from './store/store';
import { env } from './relay/RelayEnvironment';
import { Section } from './AppStyles';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { FallBackSpin } from './components/UI/FallbackSpin/FallbackSpin';

const Content = React.lazy(() => import('./components/Content/Content'));

function App() {
  return (
    <RelayEnvironmentProvider environment={env}>
      <Suspense fallback={<FallBackSpin />}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={userPersistor}>
            <Section>
              <Navbar />
              <Content />
              <Footer />
            </Section>
          </PersistGate>
        </Provider>
      </Suspense>
      <ToastContainer />
    </RelayEnvironmentProvider>
  );
}

export default App;
