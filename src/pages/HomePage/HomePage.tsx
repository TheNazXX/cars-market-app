import classNames from 'classnames';
import ProductCard from 'components/ProductCard';
import {Helmet} from 'react-helmet';
import styles from './home-page.module.scss';

const HomePage: React.FC = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>Главная MarketPlace</title>
      </Helmet>

      <div className={classNames(styles.productGroup)}>
        <ProductCard _id={'1'} label='Ноутбук'/>
      </div>
    </>
  );
};

export default HomePage;