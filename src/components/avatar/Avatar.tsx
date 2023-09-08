import './avatar.css';

type AvatarProps = { avatarSrc: string; size: string };

export default function Avatar({ avatarSrc, size }: AvatarProps) {
  return <img src={avatarSrc} className={'avatar-container ' + size}></img>;
}
