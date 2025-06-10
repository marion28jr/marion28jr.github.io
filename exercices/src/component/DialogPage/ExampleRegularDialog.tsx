import { useState, type FC } from "react";
import Dialog from "../../shared/component/dialog/Dialog.tsx/Dialog";

/**
 * Ce composant permet de montrer un exemple d'une boite de dialogue avec intéraction
 */
const ExampleRegularDialog: FC = () => {
  const [showRegularDialog, setShowRegularDialog] = useState(false);
  const [team, setTeam] = useState<string | undefined>();

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

          {team === undefined ? (
            <button
              className="btn btn-primary"
              onClick={() => setTeam(`Team ${Math.floor(Math.random() * 10)}`)}
            >
              Add your team
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => setShowRegularDialog(true)}
            >
              Remove your team
            </button>
          )}
        </div>
      </div>

      <Dialog
        visible={showRegularDialog}
        body={<h5>Are you sure you want remove team ? </h5>}
        footer={
          <div className="d-flex align-items-left">
            <button
              className="btn btn-secondary me-1"
              onClick={() => {
                setShowRegularDialog(false);
              }}
            >
              No
            </button>

            <button
              className="btn btn-primary"
              onClick={() => {
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
