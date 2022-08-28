import './App.css';
import { Container } from 'react-bootstrap';
import Rockets from './pages/rockets';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Rockets />
      </Container>
    </div>
  );
}

export default App;
