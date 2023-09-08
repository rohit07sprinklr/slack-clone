import ErrorPage from './components/errorPage/ErrorPage';
import Mainpage from './components/mainpage/Mainpage';
import './styles.css';
import { ErrorBoundary } from 'react-error-boundary';
export default function App() {
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <div className="App">
        <Mainpage />
      </div>
    </ErrorBoundary>
  );
}
