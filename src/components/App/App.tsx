import classNames from 'classnames/bind';
import Layout from '../Layout';
import HomePage from '../../pages/HomePage';
import styles from './styles.scss';

const cx = classNames.bind(styles);

const App = () => {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
};

export default App;
