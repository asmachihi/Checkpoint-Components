import  ProfilePhoto from "./Profil/ProfilePhoto.js"
import Nom from "./Profil/Nom.js"
import Adresse from "./Profil/Adresse.js"
import './App.css';
import './style.css'

function App() {
  return (
    <div className="App">
     <ProfilePhoto/><br/><br/><br/>
     <Nom/><br/><br/><br/>
     <Adresse/>
    </div>
  );
}

export default App;
