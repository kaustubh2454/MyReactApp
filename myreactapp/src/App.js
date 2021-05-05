import './App.css';
import Headerr from './Header';
import Footer from './Footer';
import MainBody from './Mainbody';
import AddButton from './AddButton';
import ClassComp from './classComp';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

function App() {
  
  let seedtodo = [
    {
      title: "Finance",
      msg: "Clear credit card balance"
    },
    {
      title: "Groceries",
      msg: "Order papaya for vitamin D."
    },
    {
      title: "Health",
      msg: "Order BP machine."
    }
  ]
  return (
    <div className="App">
      <Headerr/>
      <Container >
       
        <Row>
          <Col><AddButton /></Col>
        </Row>
        <Row>
          <Col><MainBody seedtodo={seedtodo} /></Col>
        </Row>
      </Container>

      {/* <ClassComp /> */}
      <Footer />

    </div>
  );
}

export default App;
