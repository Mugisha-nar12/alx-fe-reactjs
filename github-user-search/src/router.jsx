import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import UserProfile from './components/UserProfile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'user/:username',
        element: <UserProfile />,
      },
    ],
  },
]);

export default router;