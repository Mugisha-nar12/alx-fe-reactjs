import { Outlet } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import ThemeSwitcher from './components/ThemeSwitcher';
import { useTheme } from './context/ThemeContext';

function App() {
  const { theme } = useTheme();

  return (
    <ErrorBoundary>
      <div className={`min-h-screen bg-gray-100 dark:bg-gray-900 ${theme}`}>
        <header className="bg-gray-800 text-white shadow-md">
          <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">GitHub User Search</h1>
            <ThemeSwitcher />
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