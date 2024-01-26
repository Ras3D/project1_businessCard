import './App.css'
import Header from './components/Header.jsx'
import ContactButtons from './components/ContactButtons.jsx'
import About from './components/About.jsx'
import Interests from './components/Interests.jsx'
import Footer from './components/Footer.jsx'


function App() {

  return (
    <>
    <main className='app-main'>
      <Header />
      <ContactButtons />
      <About />
      <Interests />
      <Footer />
    </main>
    </>
  )
}

export default App
