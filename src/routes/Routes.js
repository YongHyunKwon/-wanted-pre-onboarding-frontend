import React from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Outlet,
  Route,
  Routes as ReactRoutes,
} from 'react-router-dom';
import LoginPage from 'pages/LoginPage';
import TodosPage from 'pages/TodosPage';
import { useAuth } from 'modules/context/AuthContext';

// 로그인할 경우 해당 페이지 접근하면 todo 페이지로 이동
const PublicRoutes = (props) => {
  const { auth } = useAuth();

  return auth ? <Navigate to="/todo" /> : <Outlet />;
};

// 로그인이 필요한 페이지로 접근할 경우 로그인 페이지로
const ProtectedRoutes = (props) => {
  const { auth } = useAuth();

  return auth ? <Outlet /> : <Navigate to="/" />;
};

const Routes = () => {
  return (
    <Router>
      <ReactRoutes>
        <Route path="/" element={<PublicRoutes />}>
          <Route path="/" element={<LoginPage />} />
        </Route>
        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/todo" element={<TodosPage />} />
        </Route>
      </ReactRoutes>
    </Router>
  );
};

export default Routes;
