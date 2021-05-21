import { useSelector } from 'react-redux';
import { Spacer, Tabs } from '../components';
import DoneTabContent from '../components/done-tab-content';
import PrivacyForm from '../components/privacy-form';
import UserForm from '../components/user-form';
import styles from '../styles/Home.module.scss';

const tabsWithSubmitButton = ['User', 'Privacy'];

const Home = () => {
  const selectedTab = useSelector(state => state.form.selectedTab);

  const handleSubmit = () => {};

  return (
    <div className={styles.container}>
      <Tabs selectedTab="" />
      <Spacer height="15px" />
      <div className={styles.form_wrapper}>
        {selectedTab === 'User' && <UserForm />}
        {selectedTab === 'Privacy' && <PrivacyForm />}
        {selectedTab === 'Done' && <DoneTabContent />}

        {tabsWithSubmitButton.includes(selectedTab) && (
          <button
            className={styles.submit_button}
            onClick={handleSubmit}
            type="button"
          >
            SUBMIT
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
