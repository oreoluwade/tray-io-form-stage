import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import styles from './Tabs.module.scss';
import { setSelectedTab } from '../../redux/actions/form.action';

const Tabs = () => {
  const selectedTab = useSelector(state => state.form.selectedTab);
  const dispatch = useDispatch();

  const getButtonClass = buttonName => {
    return cn({
      [styles.button]: true,
      [styles['button--active']]: selectedTab === buttonName
    });
  };

  const handleTabClick = e => {
    dispatch(setSelectedTab(e.target.name));
  };

  return (
    <div className={styles.root}>
      <button
        type="button"
        className={getButtonClass('User')}
        name="User"
        onClick={handleTabClick}
        data-cy="user-tab"
      >
        User
      </button>
      <button
        type="button"
        className={getButtonClass('Privacy')}
        name="Privacy"
        onClick={handleTabClick}
        data-cy="privacy-tab"
      >
        Privacy
      </button>
      <button
        type="button"
        className={getButtonClass('Done')}
        name="Done"
        onClick={handleTabClick}
        data-cy="done-tab"
      >
        Done
      </button>
    </div>
  );
};

export default Tabs;
