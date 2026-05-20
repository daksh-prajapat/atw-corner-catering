import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'Royal Catering - Pure Veg Catering Delhi',
  description: 'Best pure veg catering services in Delhi for weddings, parties, and corporate events.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
          <Footer /> 
      </body>
    </html>
  );
}