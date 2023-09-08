//Components
import { BrosweIconElement } from '../../../iconElement/BrowseIconElement';
import { CanvasIconElement } from '../../../iconElement/CanvasIconElement';
import { FilesIconElement } from '../../../iconElement/FilesIconElement';

//styles
import './quickAccess.css';

//types
type QuickAccessMenuProps = { title: string; svgComponent: any };

function QuickAccessMenu({ title, svgComponent }: QuickAccessMenuProps) {
  return (
    <button className="button navbar_quick_access_menu">
      {svgComponent}
      <div className="navbar_quick_access_menu_title">{title}</div>
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
