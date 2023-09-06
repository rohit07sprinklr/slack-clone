//categorize types

//libs
import { createPortal } from 'react-dom';
import { ReactNode } from 'react';

//css
import './dialogModal.css';

type DialogModalProps = {
  isOpen: boolean;
  title: ReactNode;
  closeDialog: () => void;
  children: any;
};

//move inside workspace header
//fix props everywhere
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
