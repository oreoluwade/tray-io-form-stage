import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import cn from 'classnames';
import styles from './PageIndicator.module.scss';

const PageIndicator = () => {
  const router = useRouter();

  const selectedTab = useSelector(state => state.form.selectedTab);

  const getButtonClass = buttonName => {
    return cn({
      [styles.button]: true,
      [styles['button--active']]: selectedTab === buttonName
    });
  };

  const handleTabClick = e => {
    router.push(e.target.name.toLowerCase());
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

export default PageIndicator;
