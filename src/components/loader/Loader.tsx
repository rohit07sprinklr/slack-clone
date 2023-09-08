//css
import './loader.css';

//types
type LoaderProps = {
  size?: string;
};

export default function Loader({ size }: LoaderProps) {
  return <div className={size ? 'loader '.concat(size) : 'loader'}></div>;
}
