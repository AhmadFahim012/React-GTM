import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import Home from "./pages/Home";

function App() {

  return (
    <>
      <h1>React-GTM</h1>
      <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
