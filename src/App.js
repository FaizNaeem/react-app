import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
// import pic from "../assects/faiz.png"
import './App.css';

function App() {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light bg-light cus">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src="https://mobirise.com/extensions/resultm5/affiliate-marketing/assets/images/logo.png"></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">partner</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Marketing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">FAQ</a>
        </li>
     
      </ul>
    </div>
  </div>
</nav>
    </>

  );
}

export default App;
