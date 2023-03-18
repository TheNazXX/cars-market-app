import classNames from 'classnames';
import ProductCard from 'components/ProductCard';
import {Helmet} from 'react-helmet';
import { ProductsMockData } from 'mockData/ProductsMockData/ProductsMockData';
import styles from './home-page.module.scss';

const HomePage: React.FC = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>Главная MarketPlace</title>
      </Helmet>

      <div className={classNames(styles.productGroup)}>
        {ProductsMockData.map(data => {
          return <ProductCard {...data}/>
        })}
      </div>
    </>
  );
};

export default HomePage;