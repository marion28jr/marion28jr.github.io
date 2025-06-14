import { useState, type FC } from "react";
import Dialog from "../../../shared/component/dialog/dialog";

/**
 * Ce composant permet de montrer un exemple d'une boite de dialogue avec interaction
 */
const ExampleRegularDialog: FC = () => {
  const [showRegularDialog, setShowRegularDialog] = useState(false);
  const [team, setTeam] = useState<string>();

  const onClick = (): void => {
    if (team === undefined) {
      // Action Add team
      setTeam(`Team ${Math.floor(Math.random() * 10).toString()}`);
    } else {
      // Action remove team
      setShowRegularDialog(true);
    }
  };

  return (
    <div className="mt-4">
      <div className="card" style={{ height: "100%" }}>
        <div className="card-body">
          <h5 className="card-title">
            {team === undefined ? (
              <>You have not team</>
            ) : (
              <>
                Your team is '<strong>{team}</strong>'
              </>
            )}
          </h5>

          <button className="btn btn-primary" onClick={onClick}>
            {`${team === undefined ? "Add" : "Remove"} your team`}
          </button>
        </div>
      </div>

      <Dialog
        visible={showRegularDialog}
        setVisible={setShowRegularDialog}
        body={<h5>Are you sure you want remove team ?</h5>}
        footer={
          <div className="pt-3 d-flex align-items-left">
            <button
              className="btn btn-secondary me-2"
              onClick={(): void => {
                setShowRegularDialog(false);
              }}
            >
              No
            </button>

            <button
              className="btn btn-primary"
              onClick={(): void => {
                setTeam(undefined);
                setShowRegularDialog(false);
              }}
            >
              OK
            </button>
          </div>
        }
      />
    </div>
  );
};

export default ExampleRegularDialog;
