import Navigation from "./components/Navigation";
import PeopleToFollow from "./components/PeopleToFollow";

function App() {
 

  return (
    <div>
     <Navigation />

     <div className="flex justify-center">
      {/* Main */}
      
      <div className="w-[30%]"></div>
       <PeopleToFollow />
     </div>
    </div>
  )
}

export default App
