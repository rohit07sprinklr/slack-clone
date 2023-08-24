import { BrosweIconElement } from '../IconElement/BrowseIconElement';
import { CanvasIconElement } from '../IconElement/CanvasIconElement';
import { FilesIconElement } from '../IconElement/FilesIconElement';
import './quickAccess.css';

function QuickAccessMenu(props: { title: string; svgComponent: any }) {
  return (
    <button className="button navbar_quick_access_menu">
      {props.svgComponent}
      <div className="navbar_quick_access_menu_title">{props.title}</div>
    </button>
  );
}

export default function QuickAccess() {
  return (
    <div className="navbar_quick_access">
      <QuickAccessMenu title="Canvases" svgComponent={<CanvasIconElement />} />
      <QuickAccessMenu title="Files" svgComponent={<FilesIconElement />} />
      <QuickAccessMenu
        title="Browse Slack"
        svgComponent={<BrosweIconElement />}
      />
    </div>
  );
}
