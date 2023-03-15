import classnames from 'classnames';
import styles from './header.module.scss';

const Header: React.FC = (): JSX.Element => {
  return (
    <div className={classnames(styles.header)}>Header</div>
  );
};

export default Header