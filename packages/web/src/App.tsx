import React, { Suspense } from 'react';
import { Section } from './AppStyles';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';

const Content = React.lazy(() => import('./components/content/Content'));

function App() {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <Section>
          <Navbar />
          <Content />
          <Footer />
        </Section>
      </Suspense>
    </div>
  );
}

export default App;
