import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router';
import { BrowserRouter, Route, Routes } from 'react-router';
import { AuthLayout } from '@/auth/layout/AuthLayout';
import { LoginPage } from '@/auth/layout/pages/LoginPage';
import { RegisterPage } from '@/auth/layout/pages/RegisterPage';

import { sleep } from '@/lib/sleep';

const ChatLayout = lazy( async() => {
  await sleep( 1500 );
  return import('@/chat/layout/ChatLayout');
})

const ChatPage = lazy( () => import('@/chat/pages/ChatPage') )

const NoChatSelected = lazy( () => import('@/chat/pages/NoChatSelected') )

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/auth' element={ <AuthLayout /> }>
              <Route index element={ <LoginPage /> } />
              <Route path='/auth/register' element={ <RegisterPage /> } />
            </Route>

            <Route path='/chat' element={ 
                <Suspense
                  fallback={<div>Loading...</div>}
                >
                  <ChatLayout />
                </Suspense>
              } 
            >
              <Route path="/chat/:clientId" element={ <ChatPage /> } />
              <Route index element={ <NoChatSelected /> } />
            </Route>

            <Route path='/' element={ <Navigate to='/auth' /> } />
            <Route path='*' element={ <Navigate to='/auth' /> } />
        </Routes>
    </BrowserRouter>
  )
}
