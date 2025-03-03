
import './styles/index.scss';
import { RouterProvider } from 'react-router-dom';
import router from './routes';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
