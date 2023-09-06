import './avatar.css';

type AvatarProps = { avatarSrc: string; size: string };

export default function Avatar(props: AvatarProps) {
  return (
    <img
      src={props.avatarSrc}
      //bem
      className={'avatar-container ' + props.size}
    ></img>
  );
}
