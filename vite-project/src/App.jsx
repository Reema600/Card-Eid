
import {Route,Routes} from 'react-router-dom'
import './App.css'
import Card from './Component/Card'
import Information from './Component/Information'
function App() {


  return (
    <>
     {/* <Card></Card> */}
     {/* <Information></Information> */}

     <Routes>
      <Route path='/' element={<Information></Information>}></Route>
      <Route path='/card' element={<Card></Card>}></Route>
     </Routes>
    </>
  )
}

export default App
