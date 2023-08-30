import { createPortal } from 'react-dom';
import './dialogModal.css';
import { ReactNode } from 'react';
type DialogModalProps = {
  dialogOpen: boolean;
  title: ReactNode;
  closeDialog: () => void;
  children: any;
};
export function DialogModal(props: DialogModalProps) {
  const rootElm = document.getElementsByClassName('App')[0];
  const handleClose = () => {
    props.closeDialog();
  };
  if (props.dialogOpen && rootElm)
    return createPortal(
      <div className="modal-container">
        <dialog id="add-member-dialog" open={props.dialogOpen}>
          <div className="dialog-header">
            {props.title}
            <button className="button">
              <img
                src="assets/icons/close.png"
                width={20}
                height={20}
                onClick={handleClose}
              />
            </button>
          </div>
          {props.children}
        </dialog>
      </div>,
      rootElm
    );
  else {
    return <></>;
  }
}
