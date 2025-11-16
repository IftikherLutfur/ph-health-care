import LoginForm from '@/components/LoginForm'
import React from 'react'

export default function page() {
  return (
    <div className='min-h-dvh'>
        <h1 className='text-center text-2xl font-semibold'>
            Login Form
        </h1>
        <LoginForm/>
    </div>
  )
}
