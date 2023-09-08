//libs
import { createPortal } from 'react-dom';
import { ReactNode } from 'react';

//css
import './dialogModal.css';

//types
type DialogModalProps = {
  dialogOpen: boolean;
  title: ReactNode;
  closeDialog: () => void;
  children: any;
};

export function DialogModal({
  dialogOpen,
  title,
  closeDialog,
  children
}: DialogModalProps) {
  const rootElm = document.getElementsByClassName('App')[0];
  const handleClose = () => {
    closeDialog();
  };
  if (dialogOpen && rootElm)
    return createPortal(
      <div className="modal-container">
        <dialog id="add-member-dialog" open={dialogOpen}>
          <div className="dialog-header">
            {title}
            <button className="button">
              <img
                src="assets/icons/close.png"
                width={20}
                height={20}
                onClick={handleClose}
              />
            </button>
          </div>
          {children}
        </dialog>
      </div>,
      rootElm
    );
  else {
    return <></>;
  }
}
