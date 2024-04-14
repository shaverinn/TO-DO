import Inprogres from "./components/Inprogres";
import Todo from "./components/Todo";
import Review from "./components/Review";
import Done from "./components/Done";
import styles from "./styles.module.css";


function App() {
  return (
    <div className={styles.app}>
      <h1 className={styles.titel}>Project Example</h1>

      <div className={styles.container}>
        <div className={styles.collum}>
          <Todo />
        </div>

        <div className={styles.collum}>
          <Inprogres />
        </div>

        <div className={styles.collum}>
          <Review />
        </div>

        <div className={styles.collum}>
          <Done />
        </div>
      </div>
    </div>
  );
}

export default App;
