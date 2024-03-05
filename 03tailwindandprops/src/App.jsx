import './App.css'
import Card from './components/Card'

function App() {
  var person1 = {
    name : 'Mayuresh',
    rollno: 54,
    dateOfBirth: "24/05/1997"
  }
  return (
    <>
      <Card name={person1.name} rollno={person1.rollno} dateOfBirth={person1.dateOfBirth}/>     
    </>
  )
}

export default App
