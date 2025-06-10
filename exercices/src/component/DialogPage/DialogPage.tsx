import type { FC } from "react";
import ExampleRegularDialog from "./ExampleRegularDialog";

const DialogPage: FC = () => {
  return (
    <div className="mt-4">
      <h3>
        EXERCISE #2 - Create a generic dialog component that can be customized
        with any content
      </h3>

      <div className="my-4">
        <h4 className="mb-3">Example the regular dialog</h4>
        <ExampleRegularDialog />
      </div>
    </div>
  );
};

export default DialogPage;
