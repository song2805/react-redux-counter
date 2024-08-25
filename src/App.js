

import './App.css';
import { Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './component/Nav'

function AppCopy() {

  const count = useSelector(state => state.count)
  const dispatch = useDispatch()

  function increase() {
    dispatch({ type: "INCREMENT", payload: { num: 1 } })
  }
  function decrease() {
    dispatch({ type: "DECREMENT", payload: { num: 1 } })
  }

  function plus5() {
    dispatch({ type: "PLUS5", payload: { num: 5 } })
  }
  function plus10() {
    dispatch({ type: "PLUS10", payload: { num: 10 } })
  }

  function minus5() {
    dispatch({ type: "MINUS5", payload: { num: 5 } })
  }

  function minus10() {
    dispatch({ type: "MINUS5", payload: { num: 10 } })
  }

  function resetButton() {
    dispatch({ type: "RESETBUTTON", payload: { num: 0 } })
  }

  return (
    <div style={{ height: '100vh' }}>

      <Nav />


      <Container style={{ display: 'flex', justifyContent: 'center', height: '100vh' }}>

        <div className='main-container'>
          <div className='second-box'>
            <div className='first-button-positions'>
              <Button className='button-style' onClick={decrease} variant="danger"><h5>-</h5></Button>
              <div style={{ width: '100px' }}><h1 style={{ textAlign: 'center' }}>{count}</h1></div>
              <Button className='button-style' onClick={increase} variant="primary"><h5>+</h5></Button>
            </div>
            <div className='button-positions'>
              <Button className='button-style' onClick={minus5} variant="danger"><h5>-5</h5></Button>
              <Button className='button-style' onClick={minus10} variant="danger"><h5>-10</h5></Button>
              <Button className='button-style' onClick={plus5} variant="primary"><h5>+5</h5></Button>
              <Button className='button-style' onClick={plus10} variant="primary"><h5>+10</h5></Button>
            </div>
            <div className='reset-button'>
              <Button onClick={resetButton} variant="dark"><h5>Reset</h5></Button>
            </div>

          </div>
        </div>
      </Container>
    </div>



  );
}

export default AppCopy;
