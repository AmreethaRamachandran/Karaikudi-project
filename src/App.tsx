import { Header, Banner, ProductCategories, ProductShowcase, Hero, Footer } from './components'
import './App.css'
import './styles/global.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <ProductCategories />
        <Banner />
        <ProductShowcase />
        <Hero />
      </main>
      <Footer />
    </div>
  )
}

export default App
