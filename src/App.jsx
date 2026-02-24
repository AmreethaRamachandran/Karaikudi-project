import { Header, Banner, ProductCategories, ProductShowcase, BundleShowcase, ShopByCategory, CustomerReviews, SocialGallery, Hero, Footer } from './components'
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
        <BundleShowcase />
        <ShopByCategory />
        <CustomerReviews />
        <SocialGallery />
        <Hero />
      </main>
      <Footer />
    </div>
  )
}

export default App
