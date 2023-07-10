import '@styles/global.css';
import Nav from '@components/nav';
import Provider from '@components/provider';

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
}

type Props = {
  children: any;
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
        </body>
      </Provider>
    </html>
  )
}

export default RootLayout