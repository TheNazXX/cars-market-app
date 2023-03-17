import classNames from 'classnames';
import styles from './footer.module.scss';

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className={classNames(styles.footer)}>
      Marketplace MW
    </footer>
  )
}

export default Footer