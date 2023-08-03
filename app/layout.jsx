import '@styles/global.css'

export const metadata = {
  title : "Promptopia",
  description : "Promptopia is a prompt generator AI"
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
      <section className='main'>
        <div className='gradient' />
      </section>


      <main className='app'>
        {children}
      </main>
    </html>
  )
}

export default RootLayout