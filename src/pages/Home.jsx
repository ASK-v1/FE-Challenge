import '../styles/home.css';
import Search from '../components/Search';

export default function Home() {
  return (
    <div className="home">
      <div className="new-record">
        <h1>Add new record</h1>
      </div>
      <div className="logo" />

      <div className="search">
        <Search />
      </div>
    </div>
  );
}
