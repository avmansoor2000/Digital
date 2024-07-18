import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Design1 from './pages/design1'
import Design2 from './pages/design2'

const main = () => {
    return(
        <>
        <Router basename="/tinkerspace_digital">
            <Routes>
                <Route path='/design1' element={<Design1/>}/>
                <Route path='/design2' element={<Design2/>}/>
            </Routes>
        </Router>
        </>
    )
}

export default main;