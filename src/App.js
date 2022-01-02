import './styles/main.css'
import Home from './pages/Home';
import Works from './pages/Works';
import { Switch, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}>
      </Route>
      <Route exact path="/works" element={<Works />}>
      </Route>
    </Routes>
  );
};

export default App;
