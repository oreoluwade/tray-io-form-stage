import { useSelector } from 'react-redux';
import { Spacer, Tabs } from '../components';
import DoneTabContent from '../components/done-tab-content';
import PrivacyForm from '../components/privacy-form';
import UserForm from '../components/user-form';
import styles from '../styles/Home.module.scss';

const Home = () => {
  const selectedTab = useSelector(state => state.form.selectedTab);

  const handleSubmit = () => {};

  return (
    <div className={styles.container}>
      <Tabs selectedTab="" />
      <Spacer height="15px" />
      <div className={styles.form_wrapper}>
        {selectedTab === 'User' && <UserForm handleSubmit={handleSubmit} />}
        {selectedTab === 'Privacy' && (
          <PrivacyForm handleSubmit={handleSubmit} />
        )}
        {selectedTab === 'Done' && <DoneTabContent />}
      </div>
    </div>
  );
};

export default Home;
