import './App.css';
import Home from './routes/Home/Home';
import PageTwo from './routes/PageTwo/PageTwo';
import PageThree from './routes/PageThree/PageThree';
import PageFour from './routes/PageFour/PageFour';
import PageFive from './routes/PageFive/PageFive';
import PageSix from './routes/PageSix/PageSix';
import PageSeven from './routes/PageSeven/PageSeven';
import PageEight from './routes/PageEight/PageEight';
import PageNine from './routes/PageNine/PageNine';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app-main'>
  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/PageTwo" element={<PageTwo />}/>
          <Route path="/PageThree" element={<PageThree />}/>
          <Route path="/PageFour" element={<PageFour />}/>
          <Route path="/PageFive" element={<PageFive />}/>
          <Route path="/PageSix" element={<PageSix />}/>
          <Route path="/PageSeven" element={<PageSeven />}/>
          <Route path="/PageEight" element={<PageEight />}/>
          <Route path="/PageNine" element={<PageNine />}/>  
        </Routes>
      
    </div>
  );
}

export default App;
