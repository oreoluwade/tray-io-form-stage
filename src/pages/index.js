import { useSelector, useDispatch } from 'react-redux';
import { setFormStep } from '../redux/actions/form.action';
import styles from '../styles/Home.module.scss';

const Home = () => {
  const dispatch = useDispatch();
  const form = useSelector(state => state.form);

  return (
    <>
      <div className={styles.container}>Default Home page</div>
      <button
        type="button"
        onClick={() => {
          dispatch(setFormStep(form.step + 1));
        }}
      >
        Clicl
      </button>
    </>
  );
};

export default Home;
