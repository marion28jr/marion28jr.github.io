import type { FC } from "react";
import ExampleRegularDialog from "./exampleRegularDialog/exampleRegularDialog";
import ExampleModal from "./exampleModal/exampleModal";

/**
 * Ce composent permet d'afficher l'exercice 2
 */
const DialogPage: FC = () => (
  <div className="mt-4">
    <h3>
      EXERCISE #2 - Create a generic dialog component that can be customized
      with any content
    </h3>
    <div className="pt-4 pb-3">
      <h4 className="mb-3">Example with the regular dialog</h4>
      <ExampleRegularDialog />
    </div>
    <div className="pt-4 pb-3">
      <h4 className="mb-3">Example with the modal</h4>
      <ExampleModal />
    </div>
  </div>
);

export default DialogPage;
