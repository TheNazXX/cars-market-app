import HomePage from 'pages/HomePage';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import PrivateRoutes from 'routes/PrivateRouter';
import PublicRoutes from 'routes/PublicRouter';
import './App.css';

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>App</title>
      </Helmet>

      <PublicRoutes />
      <PrivateRoutes />
    </>
  );
}

export default App;


 