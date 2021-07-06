import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Bienvenue sur notre réseau Groupomania</h1>
      <div className="form">
      <label>email : </label>
      <input type="text" name="email"/>
      <label>Mot de passe : </label>
      <input type="text" name="motDePasse"/>
      <button>Connexion</button>
      </div>

      
    </div>
  );
}

export default App;
