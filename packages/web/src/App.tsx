import React, { Suspense } from 'react';
import { RelayEnvironmentProvider } from 'react-relay';
import { Section } from './AppStyles';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import { env } from './relay/RelayEnvironment';

const Content = React.lazy(() => import('./components/content/Content'));

function App() {
  return (
    <RelayEnvironmentProvider environment={env}>
      <Suspense fallback={<p>Loading...</p>}>
        <Section>
          <Navbar />
          <Content />
          <Footer />
        </Section>
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default App;
