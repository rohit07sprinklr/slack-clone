import './loader.css';

type LoaderProps = {
  size?: string;
};
export default function Loader(props: LoaderProps) {
  return (
    <div className={props.size ? 'loader '.concat(props.size) : 'loader'}></div>
  );
}
