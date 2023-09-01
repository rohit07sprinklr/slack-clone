import ErrorPage from './components/ErrorPage/ErrorPage';
import Mainpage from './components/Mainpage/Mainpage';
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
