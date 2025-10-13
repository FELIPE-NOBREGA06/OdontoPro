"use server"

<<<<<<< HEAD
import {signIn} from '@/lib/auth'
=======
import { signIn } from '@/lib/auth'
>>>>>>> 6328a0a (att)

export async function handleRegister(provider: string) {
  await signIn(provider, { redirectTo: "/dashboard" })
}