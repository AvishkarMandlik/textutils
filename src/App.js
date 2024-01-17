import './App.css';
import Navbar from './components/Navbar/Navbar';
import TextForm from './components/TextForm/TextForm';

function App() {
  return (
   <>
    <Navbar title="TextUtils"/>
    <div className="container">
     <TextForm heading="Enter the Text to Analyze Below"/>
    </div>
   </>
  );
}

export default App;
