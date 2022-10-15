import { ChakraProvider } from '@chakra-ui/react'
import '../assets/css/global.css';
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('../component/Navbar'), {ssr: false })

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
