import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Spacer, PageIndicator } from '../components';
import UserForm from '../components/user-form';
import { setSelectedTab } from '../redux/actions/form.action';
import styles from '../styles/Home.module.scss';

const User = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSelectedTab('User'));
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <PageIndicator selectedTab="" />
      <Spacer height="15px" />
      <div className={styles.form_wrapper}>
        <UserForm />
      </div>
    </div>
  );
};

export default User;
