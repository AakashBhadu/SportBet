import Head from 'next/head'
import Image from 'next/image'
import { PropsWithChildren, useState } from "react"
import { AccountView } from '../AccountView'


export const TopLayout = ({children}:PropsWithChildren) => {

    let [expandSearch, setExpandSearch] = useState(false);
    let searchStyle = "w-96 h-10 pl-2 outline-none hidden border rounded md:block"
    let expandSearchStyle = "w-full h-10 pl-2 outline-none block border rounded md:w-64"
    
    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <header className="flex h-16 items-center px-2 justify-between bg-blue-800 w-full">
          <div className={`font-medium ${expandSearch && "hidden"} text-2xl text-white md:block`}>
            SportBet
          </div>
          <div 
            className={`flex items-center ${expandSearch && "flex-1"} bg-white border rounded md:flex-grow-0`} 
          >
            <h1 
              className={`w-12 h-full font-bold text-red-600 text-xl text-center ${expandSearch ? "block" : "hidden"} md:hidden`}
              onClick={() => setExpandSearch(false)}
            >
              X
            </h1>
            <input 
              className={expandSearch ? expandSearchStyle : searchStyle} 
              placeholder="search for events..." 
              type="search" 
            />
            <Image 
              className=" px-1 py-2 md:pointer-events-none" 
              onClick={() => setExpandSearch(true)}
              src="/Images/search.png" 
              alt="image error" 
              width={32} 
              height={16}
            />
          </div>
        </header>
  
        <main className="flex w-full flex-1 flex-row text-center bg-white">
          {children}
          <AccountView />
        </main>
  
        <footer className="flex h-24 w-full items-center justify-center border-t bg-indigo-800">
          <a
            className="flex items-center justify-center gap-2"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <Image 
              src="/Images/vercel.svg" 
              alt="Vercel Logo" 
              width={72} 
              height={16} 
            />
          </a>
        </footer>
      </div>
    )
}