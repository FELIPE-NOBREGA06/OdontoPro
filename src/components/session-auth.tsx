"use client"

<<<<<<< HEAD
import {SessionProvider} from 'next-auth/react'

export function SessionAuthProvider({children}: { children: React.ReactNode}){
  return(
=======
import { SessionProvider } from 'next-auth/react'

export function SessionAuthProvider({ children }: { children: React.ReactNode }) {
  return (
>>>>>>> 6328a0a (att)
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}