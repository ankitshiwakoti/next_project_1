import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Placeholder from "react-bootstrap/Placeholder";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import blog from "../public/assets/blog.jpg";
import blog2 from "../public/assets/blog2.jpg";
import blog3 from "../public/assets/blog3.jpg";
import Image from "next/image";

function Search({ data }) {
  const [active, setActive] = useState(data[0]?.title);
  console.log(data);
  return (
    <>
      <Row className=" pt-5">
        <div className="row  d-flex ">
          {data?.map((items) => (
            <div
              className="col-md-3  col-6 pe-3 padding-0 border-0 fs-5   text-primary"
              key={items.title}
            >
              <button
                className={`circular--portrait border-0 fw-bold ${
                  active === items?.title
                    ? "text-white bg-dark  "
                    : "text-black  bg-light bg-gradient "
                }`}
                onClick={() => setActive(items.title)}
              >
                {items?.title}
              </button>
            </div>
          ))}
        </div>
      </Row>

      <Row className="search">
        <div className="col-md-12 col-sm-12 mt-4 border-0">
          {active === data[0]?.title && (
            <div className="card position-relative border-0">
              <Image src={blog} class="card-img-top" alt="..." />
              <div class="position-absolute top-0 start-0 mt-2 ms-2">
                <button className="rounded-pill border-0">
                  Australian migration
                </button>
              </div>
              <div class="card-body">
                <h3 className="card-title " style={{ fontSize: "30px" }}>
                  {data[0].heading}
                </h3>
                <p class="card-text mt-3">{data[0].paragraph}</p>
                <div className="row d-flex justify-content-between">
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
          )}
          {active === data[1]?.title && (
            <div class="card position-relative">
              <Image src={blog2} class="card-img-top" alt="..." />
              <div class="position-absolute top-0 start-0 mt-2 ms-2">
                <button className="rounded-pill border-0">
                  {" "}
                  Australian migration
                </button>
              </div>
              <div class="card-body">
                <h3 className="card-title " style={{ fontSize: "30px" }}>
                  {data[1].heading}
                </h3>
                <p class="card-text">{data[1].paragraph}</p>
                <div className="row d-flex justify-content-between">
                  <div className="col-md-6">
                    <p class="card-text">
                      <small class="text-muted">
                        Monday, October 10th, 2022
                      </small>
                    </p>
                  </div>
                  <div className="col-md-6 text-end">
                    <p class="card-text">
                      <small class="text-muted">continue..</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {active === data[2]?.title && (
            <div class="card position-relative">
              <Image src={blog3} class="card-img-top" alt="..." />
              <div class="position-absolute top-0 start-0 mt-2 ms-2">
                <button className="rounded-pill border-0">
                  {" "}
                  Australian migration
                </button>
              </div>
              <div class="card-body">
                <h3 className="card-title " style={{ fontSize: "30px" }}>
                  {data[2].heading}
                </h3>
                <p class="card-text">{data[2].paragraph}</p>
                <div className="row d-flex justify-content-between">
                  <div className="col-md-6">
                    <p class="card-text">
                      <small class="text-muted">
                        Monday, October 10th, 2022
                      </small>
                    </p>
                  </div>
                  <div className="col-md-6 text-end">
                    <p class="card-text">
                      <small class="text-muted">continue..</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {active === data[3]?.title && (
            <div class="card position-relative">
              <Image src={blog2} class="card-img-top" alt="..." />
              <div class="position-absolute top-0 start-0 mt-2 ms-2">
                <button className="rounded-pill border-0">
                  {" "}
                  Australian migration
                </button>
              </div>
              <div class="card-body">
                <h3 className="card-title " style={{ fontSize: "30px" }}>
                  {data[3].heading}
                </h3>
                <p class="card-text">{data[3].paragraph}</p>
                <div className="row d-flex justify-content-between">
                  <div className="col-md-6">
                    <p class="card-text">
                      <small class="text-muted">
                        Monday, October 10th, 2022
                      </small>
                    </p>
                  </div>
                  <div className="col-md-6 text-end">
                    <p class="card-text">
                      <small class="text-muted">continue..</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* <div className="col-12  ">
            {active === data[0]?.title && (
              <h1 className="text-start mt-3"> {data[0].head1}</h1>
            )}
            {active === data[0]?.button && (
              <p className="text-start mt-2 fs-5 fw-light">{data[0].body1}</p>
            )}
            {active === data[1]?.button && (
              <h1 className="text-start mt-3"> {data[1].head1}</h1>
            )}
            {active === data[1]?.button && (
              <p className="text-start mt-2 fs-5 fw-light">{data[1].body1}</p>
            )}
            {active === data[2]?.button && (
              <h1 className="text-start mt-3"> {data[2].head1}</h1>
            )}
            {active === data[2]?.button && (
              <p className="text-start mt-2 fs-5 fw-light">{data[2].body1}</p>
            )}
            {active === data[3]?.button && (
              <h1 className="text-start mt-3"> {data[3].head1}</h1>
            )}
            {active === data[3]?.button && (
              <p className="text-start mt-2 fs-5 fw-light">{data[3].body1}</p>
            )}
          </div> */}
        </div>
      </Row>
    </>
  );
}
export default Search;
