import Nav from "./component/nav.jsx"
import Body from "./component/body.jsx"
import Footer from "./component/footer.jsx"
import Mode from "./component/ModeChanger"


function App() {
  return (
    <div className="App">
      <Nav />
      <Body />
      <Footer />
      <Mode/>
    </div>
  );
}

export default App;
