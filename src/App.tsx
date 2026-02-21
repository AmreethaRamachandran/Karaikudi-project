import { Header, Hero, ProductCategories, Footer } from './components'
import './App.css'
import './styles/global.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <ProductCategories />
      </main>
      <Footer />
    </div>
  )
}

export default App
