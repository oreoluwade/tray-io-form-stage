import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import cn from 'classnames';
import styles from './PageIndicator.module.scss';
import validateForm from '../../helpers/validator';

const PageIndicator = () => {
  const router = useRouter();
  const [formHasErrors, setFormHasErrors] = useState(true);

  const selectedTab = useSelector(state => state.form.selectedTab);
  const fullFormData = useSelector(state => state.form.data);

  const userData = fullFormData?.user;

  useEffect(() => {
    const formErrors = validateForm(userData);

    if (Object.values(formErrors).every(errArr => !errArr.length)) {
      setFormHasErrors(false);
    }
  }, [userData]);

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
    <div
      className={cn({
        [styles.root]: true,
        [styles.root__not_done]: formHasErrors
      })}
    >
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
      {!formHasErrors && (
        <button
          type="button"
          className={getButtonClass('Done')}
          name="Done"
          onClick={handleTabClick}
          data-cy="done-tab"
        >
          Done
        </button>
      )}
    </div>
  );
};

export default PageIndicator;
