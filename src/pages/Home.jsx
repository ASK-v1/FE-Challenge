import '../styles/home.css';
import Search from '../components/Search';
import News from '../components/News';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home">
      <Link to="/add">
        <button className="new-record">Add new record</button>
      </Link>
      <div className="logo" />
      <Search />
      <News />
      <Footer />
    </div>
  );
}
