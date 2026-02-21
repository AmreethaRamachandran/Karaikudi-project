import { Header, Hero, ProductCategories, Footer } from './components'
import './App.css'
import './styles/global.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <ProductCategories />
        <Hero />
      </main>
      <Footer />
    </div>
  )
}

export default App
