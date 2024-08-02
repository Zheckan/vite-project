import "./App.css";
import classes from './App.module.css';
import Body from "./Body";
import Header from "./Header";

function App() {
  return (
      <div className={classes.wrapper}>
        {Array(30).fill(null).map((_, index) => (
          <button className={classes.testButton}>Test {index + 1}</button>
        ))}
      </div>
  );
}

export default App;
