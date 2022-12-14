import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <Link to="search-component">
            <li>Speech to text Search Component</li>
          </Link>
          <Link to="/review-page">
            <li>Review Page</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
