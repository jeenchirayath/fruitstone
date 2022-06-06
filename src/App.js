
import Container from './Components/Container';
import Paper from '@mui/material/Paper';
import Image from './Images/Image.jpg';

const styles = {
  paperContainer: {
      backgroundImage: `url(${Image})`,
      height: "953px",
      backgroundSize:'cover',
      backgroundPosition:'50px'
     

  }
};

function App() {
  return (
    <div className="App">
      <Paper style={styles.paperContainer} variant="elevation">
        <Container />
      </Paper>

    </div>
  );
}

export default App;
