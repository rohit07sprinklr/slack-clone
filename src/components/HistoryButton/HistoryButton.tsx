import { HistoryIconElement } from '../IconElement/HistoryIconElement';
import './historyButton.css';

export default function HistoryButton() {
  return (
    <button className="button topbar_button">
      <HistoryIconElement />
    </button>
  );
}
