import { Header, Banner, ProductCategories, Hero, Footer } from './components'
import './App.css'
import './styles/global.css'

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <main>
        <ProductCategories />
        <Hero />
      </main>
      <Footer />
    </div>
  )
}

export default App
