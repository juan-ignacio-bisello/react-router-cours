import { AuthLayout } from '@/auth/layout/AuthLayout'
import { LoginPage } from '@/auth/layout/pages/LoginPage'
import { RegisterPage } from '@/auth/layout/pages/RegisterPage'
import { Navigate } from 'react-router'
import { BrowserRouter, Route, Routes } from 'react-router'

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/auth' element={ <AuthLayout /> }>
              <Route index element={ <LoginPage /> } />
              <Route path='/auth/register' element={ <RegisterPage /> } />
            </Route>

            <Route path='/' element={ <Navigate to='/auth' /> } />
            <Route path='*' element={ <Navigate to='/auth' /> } />
        </Routes>
    </BrowserRouter>
  )
}
