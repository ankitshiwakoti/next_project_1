import { Row } from "react-bootstrap";
import blog from "../public/assets/blog.jpg";
import Image from "next/image";
function Slider() {
  return (
    <>
      <Row className="pt-5 pb-5">
        <div className="card position-relative border-0">
          <div class="row g-0">
            <div class="col-md-4">
              <Image src={blog} class="card-img-top" alt="..." />
            </div>

            <div class="position-absolute top-0 start-0 mt-2 ms-4">
              <button className="rounded-pill border-0">
                Australian migration
              </button>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h3 className="card-title " style={{ fontSize: "30px" }}>
                  The compulsion of employment letter to Engineers Australia for
                  CDR
                </h3>
                <p class="card-text mt-3">
                  CDR Report is a crucial Report that showcases all the details
                  regarding your Experience, your day-by-day progress, and your
                  roles and responsibilities towards your company or an
                  organization .CDR Report is a crucial Report that showcases
                  all the details regarding your Experience, your day-by-day
                  progress, and your roles and responsibilities towards your
                  company or an organization
                </p>
                <div className="row d-flex justify-content-between pt-5">
                  <div className="col-md-6">
                    <p class="card-text">
                      <small class="text-muted">
                        Monday, October 10th, 2022
                      </small>
                    </p>
                  </div>
                  <div className="col-md-6 text-end">
                    <p class="card-text">
                      <small class="text-muted">continue... </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Row>
    </>
  );
}
export default Slider;
