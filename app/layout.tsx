import { ReactNode } from 'react';
import '@styles/global.css';
import Nav from '@components/nav';
import Provider from '@components/provider';
import Footer from '@components/footer';

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
}

type Props = {
  children: ReactNode;
}

const RootLayout = ({children}: Props) => {
  return (
    <html lang='en'>
      <Provider>
        <body>
          <div className='main'>
            <div className='gradient'/>
          </div>

          <main className='app'>
            <Nav />
            {children}
          </main>

          <Footer />
          
        </body>
      </Provider>
    </html>
  )
}

export default RootLayout