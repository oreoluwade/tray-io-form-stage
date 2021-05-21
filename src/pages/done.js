import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Spacer, PageIndicator } from '../components';
import DoneTabContent from '../components/done-tab-content';
import { setSelectedTab } from '../redux/actions/form.action';
import styles from '../styles/Home.module.scss';

const Done = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSelectedTab('Done'));
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <PageIndicator selectedTab="" />
      <Spacer height="15px" />
      <div className={styles.form_wrapper}>
        <DoneTabContent />
      </div>
    </div>
  );
};

export default Done;
