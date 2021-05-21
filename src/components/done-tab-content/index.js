import { useSelector } from 'react-redux';
import Spacer from '../spacer';
import styles from './DoneTabContent.module.scss';

const DoneTabContent = () => {
  const fullFormData = useSelector(state => state.form.data);

  // Pretty Print Form data
  console.log(JSON.stringify(fullFormData, null, 2));

  return (
    <div className={styles.root}>
      <img src="icons/checkmark.svg" alt="" className={styles.check} />
      <Spacer height={30} />

      <p className={styles.confirmation_text}>
        Please verify your email address.
      </p>
      <Spacer height={15} />
      <p className={styles.confirmation_text}>
        You should have received an email from us already!
      </p>
    </div>
  );
};

export default DoneTabContent;
