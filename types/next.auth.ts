import { DefaultSession,  } from 'next-auth'

declare module 'next-auth'{
    interface Session{
        user:User & DefaultSession['user']
    }
}

interface User{
    id: String,
    name: String
    email: String,
    emailVerified?: null | String | boolean;
    image?: string;
    stripe_custome_id?: String;
    time: String[];
    address?: String;
    status: boolean;
    createdAT: String;
    updateAt: String;
}