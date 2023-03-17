import classnames from 'classnames';
import styles from './header.module.scss';

const Header: React.FC = (): JSX.Element => {
  return (
    <header className={classnames(styles.header)}>Header</header>
  );
};

export default Header;