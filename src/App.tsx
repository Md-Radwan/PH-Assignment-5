import { Suspense } from 'react'
import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Technologies from './components/Technologies'
import type { Itechnologie } from './types/technologieType'

const technologieFetch = async (): Promise<Itechnologie[]> => {
  const res = await fetch('/data.json')
  const data = await res.json();
  return data;
}

function App() {
  const technologiePromise = technologieFetch()
  return (
    <>
      <Nav/>
      <Hero/>
      <Suspense fallback={<h2>Loading......</h2>}>
        <Technologies technologiePromise={technologiePromise}/>
      </Suspense>
      <Footer/>
    </>
  )
}

export default App
