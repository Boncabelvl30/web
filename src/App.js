import './App.css'
import NavigationBar from './components/NavigationBar'
import "./style/LandingPage.css"
import Intro from './components/Intro';
import Trending from './components/Trending'


function App() {
  return (
  <div>
    {/* Intro Section */}
    <div className="myBG">
      <NavigationBar />
      <Intro />
    </div>
    {/* End of Intro */}

    {/* Trending */}
    <div className='trending'>
      <Trending />
    </div>
    {/* End Of Trending */}
  </div>
  );
}

export default App;
