import { Outlet } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RootLayout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1 py-4 mt-5">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default RootLayout;