
import './App.css'
import Mainpage from './Mainpage'
import {Route,Routes} from 'react-router-dom';
import MealInfo from './MealInfo';
function App() {

  return (
    <Routes>
      <Route path='/' element={<Mainpage/>}/>
      <Route path='/:mealid' element={<MealInfo/>}/>
    </Routes>
  )
}

export default App
