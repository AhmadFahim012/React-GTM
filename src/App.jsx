import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
