import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import EditorPage from './pages/EditorPage';
import Home from './pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/editor/:roomId" element={<EditorPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
