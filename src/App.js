
import './App.css';
import Faculty from './Faculty.js';
import User from './User.js';

const mca = require('./mca.json')

function App(props) {
  console.log(mca)
  return (
  <>
  {/* {
    mca.map(function(student)
    {
      return <Faculty image={`${student.image}`} name={`${student.name}`} description={`${student.description}`} />
    })
  } */}
  
  <User username="Alex Guerrero" />
  
  </>    
    );
}
export default App;
