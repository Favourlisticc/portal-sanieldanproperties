// Logout component
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear local storage
    localStorage.removeItem('authToken');
    localStorage.removeItem('authUser');
    // Redirect to login page
    navigate('/');
  }, [navigate]);

  return null; // No need to render anything
}

export default Logout;
