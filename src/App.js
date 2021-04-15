import NavigationBar from './components/layout/NavigationBar';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Contact from './Contact';

function App() {
  return (
    <div className='App'>
      <NavigationBar />
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
