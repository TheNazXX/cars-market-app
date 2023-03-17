import Footer from 'features/Footer';
import Header from 'features/Header';
import {Suspense} from 'react'

import { Helmet } from 'react-helmet';
import PrivateRoutes from 'routes/PrivateRouter';
import PublicRoutes from 'routes/PublicRouter';
import './app.scss';

const App: React.FC = (): JSX.Element => {
  return (
    <div className='wrapper'>
      <Helmet>
        <title>App</title>
      </Helmet>

      <Header />

      <main>
        <Suspense fallback={'Loading...'}>
          <PublicRoutes />
          {/* <PrivateRoutes /> */}
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;


 