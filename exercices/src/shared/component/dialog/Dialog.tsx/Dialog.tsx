import { type FC, type JSX } from "react";
import "./Dialog.css";

interface DialogProps {
  visible?: boolean;
  isModal?: boolean;
  body?: JSX.Element;
  header?: JSX.Element;
  footer?: JSX.Element;
}

/**
 * Generic dialog component
 */
const Dialog: FC<DialogProps> = (props: DialogProps) => {
  const { visible, isModal = false, body, header, footer } = props;

  return (
    <>
      {visible && (
        <div className={`${isModal ? "dialog-overlay" : "dialog-content"}`}>
          <div className={`py-5 ${isModal ? "dialog-content" : ""}`}>
            {header && <div className="mx-4 dialog-header">{header}</div>}
            {body && <div className="mx-4 dialog-body">{body}</div>}
            {footer && (
              <div className={`mx-4 dialog-body ${body ? "pt-3" : ""}`}>
                {footer}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Dialog;
