import { Row } from "react-bootstrap";

function Subscribe() {
  return (
    <>
      <Row className="bg-primnary  bg-primary mt-5 mb-5 pb-5 d-flex align-items-center justify-content-center ">
        <div className="col-md-12 d-flex text-center ">
          <div className="col-md-12 pt-3 text-center">
            <h2 className="text-center">
              World-class articles, delivered weekly
            </h2>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-12 d-flex justify-content-center">
            <div className="col-md-6">
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                aria-label="Username"
              />
            </div>
            <div className="col-md-6 ">
              <button type="button" class="btn btn-secondary">
                Secondary
              </button>
            </div>
          </div>
        </div>
      </Row>
    </>
  );
}
export default Subscribe;
