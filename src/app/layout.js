"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import { appreducer } from '@/reducer/appreducer'
import { useReducer } from 'react'
import { init } from 'next/dist/compiled/webpack/webpack'
import { appctx } from '@/context/appcontext'
import  {Menu} from "../components/Menu"
import { Header } from '@/components/Header'
import { Footer} from '../components/Footer'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const [state,dispatch]=useReducer(appreducer,init)
  return (
    <html lang="en">
      <body className={inter.className}>
      <appctx.Provider value={{state,dispatch}} >
        {children}
        </appctx.Provider>
        </body>
      
    </html>
  )
}
