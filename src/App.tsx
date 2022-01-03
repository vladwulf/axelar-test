import { Toaster } from 'react-hot-toast'
import { Layout } from './components/layout'
import { MainPage } from './pages'

function App() {
  return (
    <div className="h-px min-h-screen">
      <Toaster position="top-right" />
      <Layout>
        <MainPage />
      </Layout>
    </div>
  )
}

export default App
