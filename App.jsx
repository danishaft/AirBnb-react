import Navbar from "./Components/Navbar"
import Hero  from "./Components/Hero"
import Card from "./Components/Card"
import Data from "./data"

const cardElem = Data.map((elem)=>{
  return <Card 
        key={elem.id}
        {...elem}
      />
})

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <section className="card--sec">
        {cardElem}
      </section>
    </main>
  )
}

export default App
