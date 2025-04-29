import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="content">
      <h1>Welcome to the Home Page</h1>
      <nav>
        <Link to="/about">Go to About</Link> | <Link to="/contact">Go to Contact</Link>
      </nav>
    </div>
  );
}
