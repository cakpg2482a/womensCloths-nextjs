
import Home from './home/page'
import "bootstrap/dist/css/bootstrap.min.css"
import Head from 'next/head'




export default function page() {
  return (<>
    <Head>
      <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css'></link>
    </Head>
    <div style={{backgroundColor:"#31343C",minWidth:"100%",width:"100%"}}>
      <Home />
     
    </div>
  


  </>



  )
}
