import '../styles/home.css';
import Search from '../components/Search';
import News from '../components/News';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="home">
      <button className="new-record">Add new record</button>
      <div className="logo" />
      <Search />
      <News />
      <Footer />
    </div>
  );
}
