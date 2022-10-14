import {WebBuilder} from './WebBuilder/WebBuilder'
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import { Home } from './Home';
export const App = () => {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/editor/:pageId' exact element={<WebBuilder />}/>
          <Route path='/' exact element={<Home />}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
