import { useState, type FC } from "react";
import Dialog from "../../../shared/component/dialog/dialog";
import { flowers, type Flower } from "../../../shared/modal/flower";
import "./exampleModal.css";

/**
 * Ce composant permet de montrer un exemple d'une modale sans interaction
 */
const ExampleModal: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [currantFlower, setCurrantFlower] = useState<Flower>(flowers[0]);

  return (
    <div className="mt-4">
      <div className="card">
        <div className="card-body">
          <button
            className="btn btn-primary"
            onClick={(): void => {
              setShowModal(true);
            }}
          >
            Open modal
          </button>
        </div>
      </div>

      <Dialog
        isModal
        close
        showDivider
        visible={showModal}
        setVisible={setShowModal}
        header={
          <h4 className="pb-3">
            <strong>Flowers</strong>
          </h4>
        }
        body={
          <div>
            <img
              className="img-currant"
              src={currantFlower.src}
              alt={currantFlower.name}
            />
            <div className="row">
              {flowers.map((flower: Flower) => (
                <div className="col" key={flower.id}>
                  <img
                    className="img-sm"
                    src={flower.src}
                    alt={flower.name}
                    onClick={(): void => {
                      setCurrantFlower(flower);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        }
      />
    </div>
  );
};

export default ExampleModal;
