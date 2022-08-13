import './App.css';
import SidebarLeft from './components/sidebarLeft/sidebarLeft';
import {Row} from 'react-bootstrap';

function App() {
  return (
    <Row className='App'>
      <div>
        <SidebarLeft/>
      </div>
    </Row>
  );
}

export default App;
