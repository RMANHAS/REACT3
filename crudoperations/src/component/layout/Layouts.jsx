
import Header from './Header'
import Footer from './Footer'

export default function Layouts({children}) {
  return (
    <>
    <Header/>
   <main> {children}  </main>
    <Footer/>
    </>
  )
}
