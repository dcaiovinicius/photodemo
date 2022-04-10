import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Views
import Feed from '@app/views/Feed';
import LogIn from '@app/views/LogIn';
import SignUp from '@app/views/SignUp/Index';

// Utils
import ProtectedRoute from '@app/utils/ProtectedRoute';

// AuthContext
import { AuthProvider } from '@app/contexts/AuthContext';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/app/feed" element={<ProtectedRoute />}>
            <Route path="/app/feed" element={<Feed />} />
          </Route>

          <Route path="/app/login" element={<LogIn />} />
          <Route path="/app/signup" element={<SignUp />} />
          <Route path="/app/post" element={<SignUp />} />

          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
