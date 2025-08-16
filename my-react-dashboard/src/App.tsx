import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import RequireAuth from './components/auth/RequireAuth';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <HomePage />
        } />

      <Route path="/dashboard" element={ 
        <RequireAuth>  
         <DashboardPage />
          </RequireAuth>
        } />
        
    </Routes>
  );
}

export default App;