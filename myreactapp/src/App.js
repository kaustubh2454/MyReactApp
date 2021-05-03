import './App.css';
import Headerr from './Header';
import Footer from './Footer';
import MainBody from './Mainbody';
import AddButton from './AddButton'

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

      <Headerr />
      <AddButton />
      <MainBody seedtodo={seedtodo} />
      <Footer />

    </div>
  );
}

export default App;
