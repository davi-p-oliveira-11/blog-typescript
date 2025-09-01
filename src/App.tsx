import Navigation from "./components/Navigation";
import PeopleToFollow from "./components/PeopleToFollow";
import TrendList from "./components/TrendList";

function App() {
 

  return (
    <div>
     <Navigation />

     <div className="flex justify-center">
      {/* Main */}
      
      <div className="w-[30%]"></div>
       <PeopleToFollow />
       <TrendList />
     </div>
    </div>
  )
}

export default App
