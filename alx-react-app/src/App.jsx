import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import MainContent from './components/MainContent.jsx';
import UserProfile from './components/UserProfile.jsx';
 

const App = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Footer />
      
    </div>
  )
}

export default App