import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { AuthGuard } from './auth-guard';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route path="/login" element={<h1>Login</h1>} />
          <Route path="/register" element={<h1>register</h1>} />
        </Route>

        <Route element={<AuthGuard isPrivate />}>
          <Route path="/" element={<h1>Dashboard</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
