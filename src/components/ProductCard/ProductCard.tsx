import { I_ProductCard } from './ProductCard.props';
import styles from './product-card.module.scss';
import classNames from 'classnames';

const ProductCard = ({_id, label}: I_ProductCard): JSX.Element => {
  console.log(styles)
  return (
    <div className={styles.productCard}>
     Product Card
    </div>
  )
}

export default ProductCard;