import './avatar.css';

export default function Avatar(props: { avatarSrc: string; size: string }) {
  return (
    <img
      src={props.avatarSrc}
      className={'avatar-container ' + props.size}
    ></img>
  );
}
