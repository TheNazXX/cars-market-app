import Header from 'features/Header';
import HomePage from 'pages/HomePage';

import { Helmet } from 'react-helmet';
import PrivateRoutes from 'routes/PrivateRouter';
import PublicRoutes from 'routes/PublicRouter';
import './App.scss';

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>App</title>
      </Helmet>

      <Header />

      <PublicRoutes />
      <PrivateRoutes />
    </>
  );
}

export default App;


 