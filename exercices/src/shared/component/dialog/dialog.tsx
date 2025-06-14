import { type FC, type JSX } from "react";
import "./dialog.css";

interface DialogProps {
  /**
   * La visibilité de la modale
   */
  visible?: boolean;
  /**
   * Permet d'ouvrir ou fermer la modale
   * @param visible la visibilité de la modale
   */
  setVisible: (visible: boolean) => void;
  /**
   * Indique si c'est une modale (on ne peut pas interagir avec le reste de la page) ou une boite de dialogue(on peut interagir avec le reste de la page)
   */
  isModal?: boolean;
  /**
   * Indique si on affiche une croix à la modale
   */
  close?: boolean;
  /**
   * Indique si on affiche un séparateur entre l'en-tête et le corps de la modale
   */
  showDivider?: boolean;
  /**
   * Contenu de l'en-tête de la madale
   */
  header?: JSX.Element;
  /**
   * Contenu du corps de la modale
   */
  body?: JSX.Element;
  /**
   * Contenu du pied de page de la modale
   */
  footer?: JSX.Element;
}

/**
 * Modale générique
 */
const Dialog: FC<DialogProps> = (props: DialogProps) => {
  const {
    visible,
    setVisible,
    isModal = false,
    close = false,
    showDivider = false,
    header,
    body,
    footer,
  } = props;

  /**
   * Permet de retourner le css du justify-content pour le header
   */
  const getJustifyHeader = (): string => {
    if (header && close) {
      return "between";
    }
    return header ? "start" : "end";
  };

  return (
    <>
      {visible && (
        <div
          className={
            isModal ? "dialog-overlay" : "dialog-content dialog-content-dialog"
          }
        >
          <div
            className={`py-5 ${
              isModal ? "dialog-content dialog-content-modal" : ""
            }`}
          >
            {(header !== undefined || close) && (
              <div className="px-4 py-1">
                <div className={`d-flex justify-content-${getJustifyHeader()}`}>
                  {header}
                  {close && (
                    <button
                      className="btn-close"
                      type="button"
                      onClick={(): void => {
                        setVisible(false);
                      }}
                    />
                  )}
                </div>
              </div>
            )}
            {showDivider && (
              <div className="py-1">
                <div className="dialog-divider" />
              </div>
            )}
            {body && <div className="px-4 py-1">{body}</div>}
            {footer && <div className="px-4 py-1">{footer}</div>}
          </div>
        </div>
      )}
    </>
  );
};

export default Dialog;
