import styles from './styles/App.module.scss';
import img from './assets/image.png';

export const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src={img} alt='some description' className={styles.image} />
      <h1 className={styles.title}>{process.env.string}</h1>
    </div>
  );
};
