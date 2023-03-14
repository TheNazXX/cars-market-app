import {Helmet} from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { TestDiv } from './styled';

const HomePage: React.FC = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>Главная MarketPlace</title>
      </Helmet>

      <TestDiv>Home Page</TestDiv>
    </>
  );
};

export default HomePage;