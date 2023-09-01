import { handleLogout } from '../Logout/Logout';
import './errorpage.css';
export default function ErrorPage() {
  return (
    <div className="error-page">
      <h2>Oops! page not found.</h2>
      <h1>404</h1>
      <p>We can't find the page you're looking for.</p>
      <button className="button" id="error-logout" onClick={handleLogout}>
        Sign Out
      </button>
    </div>
  );
}
