import Home from "./components/Home";
import DataProvider from "./contextAPI/DataProvider";
import "./App.css"
function App() {

  return (
<div className="App">
  <DataProvider>
      <Home/>
   </DataProvider>
</div>
   
  )
}

export default App