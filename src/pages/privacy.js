import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Spacer, PageIndicator } from '../components';
import PrivacyForm from '../components/privacy-form';
import { setSelectedTab } from '../redux/actions/form.action';
import styles from '../styles/Home.module.scss';

const Privacy = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSelectedTab('Privacy'));
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <PageIndicator />
      <Spacer height="15px" />
      <div className={styles.form_wrapper}>
        <PrivacyForm />
      </div>
    </div>
  );
};

export default Privacy;
