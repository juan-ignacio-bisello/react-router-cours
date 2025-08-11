import { AuthLayout } from '@/auth/layout/AuthLayout'
import { Navigate } from 'react-router'
import { BrowserRouter, Route, Routes } from 'react-router'

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/auth' element={ <AuthLayout /> }>
            </Route>

            <Route path='/' element={ <Navigate to='/auth' /> } />
            <Route path='*' element={ <Navigate to='/auth' /> } />
        </Routes>
    </BrowserRouter>
  )
}
