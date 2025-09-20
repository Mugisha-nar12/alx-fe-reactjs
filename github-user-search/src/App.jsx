import { Outlet } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-gray-800 text-white shadow-md">
          <nav className="container mx-auto px-6 py-4">
            <h1 className="text-2xl font-bold">GitHub User Search</h1>
          </nav>
        </header>
        <main className="container mx-auto p-6">
          <Outlet />
        </main>
      </div>
    </ErrorBoundary>
  );
}

export default App;