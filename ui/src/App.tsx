import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./containers/Home";
import HandleRedirect from "./containers/HandleRedirect";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:shortId" element={<HandleRedirect />}/>
      </Routes>
    </Router>
  )
}

export default App;
