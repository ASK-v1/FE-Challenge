import '../styles/home.css';
import Search from '../components/Search';
import News from '../components/News';

export default function Home() {
  return (
    <div className="home">
      <button className="new-record">Add new record</button>
      <div className="logo" />
      <Search />
      <News />
    </div>
  );
}
