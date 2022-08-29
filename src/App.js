import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Rockets from './pages/rockets';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dragons from './pages/Dragons';
import MyProfile from './pages/MyProfile';
import Missions from './pages/Missions';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Rockets />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/dragons" element={<Dragons />} />
            <Route path="/myProfile" element={<MyProfile />} />
            <Route path="*" element={<div>Sorry page not found 404</div>} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
