
import './App.css';
import MoviesList from './MoviesList';
import Nav from './Nav';
import { MovieProvider } from './MovieContext';

function App() {
 
  return (
    <MovieProvider>
      <div className="App">
      <Nav/>
      <MoviesList/>
    </div>
    </MovieProvider>
  );
}

export default App;
