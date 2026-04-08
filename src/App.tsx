import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Pillars } from './components/Pillars'
import { Features } from './components/Features'
import { TechStack } from './components/TechStack'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <Features />
        <TechStack />
      </main>
      <Footer />
    </div>
  )
}

export default App
