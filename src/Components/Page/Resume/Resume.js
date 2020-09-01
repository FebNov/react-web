import React from "react";
import Styles from "./Resume.module.css";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <div className={Styles.SubHeading}>
            <h4>Shangjie Du Resume</h4>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>sdasdasdasdadadsad</p>
      </Modal.Body>
    </Modal>
  );
}

function UseExample() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <button onClick={() => setModalShow(true)}>View My Resume</button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

const Resume = () => (
  <section id="resume">
    <div className={Styles.Container}>
      <div>
        <UseExample />
      </div>
    </div>
  </section>
);

export default Resume;
