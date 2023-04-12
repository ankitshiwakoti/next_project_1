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

function Blogs() {
  return (
    <>
      <Row className="search pb-5 pt-4">
        <div className="col-md-6 mt-4 border-0">
          <div className="card position-relative border-0">
            <Image src={blog} class="card-img-top" alt="..." />
            <div class="position-absolute top-0 start-0 mt-2 ms-2">
              <button className="rounded-pill border-0">
                Australian migration
              </button>
            </div>
            <div class="card-body">
              <h3 className="card-title " style={{ fontSize: "30px" }}>
                The compulsion of employment letter to Engineers Australia for
                CDR
              </h3>
              <p class="card-text mt-3">
                CDR Report is a crucial Report that showcases all the details
                regarding your Experience, your day-by-day progress, and your
                roles and responsibilities towards your company or an
                organization .CDR Report is a crucial Report that showcases all
                the details regarding your Experience, your day-by-day progress,
                and your roles and responsibilities towards your company or an
                organization
              </p>
              <div className="row d-flex justify-content-between pt-5">
                <div className="col-md-6">
                  <p class="card-text">
                    <small class="text-muted">Monday, October 10th, 2022</small>
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
        <div className="col-md-6 mt-4 border-0">
          <div className="card position-relative border-0">
            <Image src={blog} class="card-img-top" alt="..." />
            <div class="position-absolute top-0 start-0 mt-2 ms-2">
              <button className="rounded-pill border-0">
                Australian migration
              </button>
            </div>
            <div class="card-body">
              <h3 className="card-title " style={{ fontSize: "30px" }}>
                The compulsion of employment letter to Engineers Australia for
                CDR
              </h3>
              <p class="card-text mt-3">
                CDR Report is a crucial Report that showcases all the details
                regarding your Experience, your day-by-day progress, and your
                roles and responsibilities towards your company or an
                organization .CDR Report is a crucial Report that showcases all
                the details regarding your Experience, your day-by-day progress,
                and your roles and responsibilities towards your company or an
                organization
              </p>
              <div className="row d-flex justify-content-between pt-5">
                <div className="col-md-6">
                  <p class="card-text">
                    <small class="text-muted">Monday, October 10th, 2022</small>
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
      </Row>
    </>
  );
}
export default Blogs;
