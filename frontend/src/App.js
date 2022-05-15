import './App.css';
import Document from "./components/Document"
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import {v4 as uuid} from "uuid";
const App = () => {
  return (
      <Router>
       <Routes>
        <Route path="/" element={<Navigate replace to={`/docs/${uuid()}`}  />}/>
        <Route path="/docs/:id" element={<Document/>} />
       </Routes>
      </Router>
  );
}

export default App;
