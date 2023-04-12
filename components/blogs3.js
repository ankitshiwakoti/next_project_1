import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Placeholder from "react-bootstrap/Placeholder";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import blog from "../public/assets/blog.jpg";

import Image from "next/image";

function Blogs3({ data }) {
  const [visible, setVisible] = useState(3);
  const loadMore = () => {
    setVisible((preValue) => preValue + 1);
  };
  return (
    <>
      <Row className="search d-flex justify-content-center">
        {data?.slice(0, visible).map((items) => (
          <div className="col-md-4 mb-4" key={items?.title}>
            <div className="card position-relative border-0">
              <Image src={blog} class="card-img-top" alt="..." />
              <div class="position-absolute top-0 start-0 mt-2 ms-2">
                <button className="rounded-pill border-0">
                  Australian migration
                </button>
              </div>
              <div class="card-body">
                <h3 className="card-title " style={{ fontSize: "30px" }}>
                  {items?.heading}
                </h3>
                <p class="card-text mt-3">{items?.paragraph}</p>
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
        ))}
      </Row>
      <Row className="d-flex justify-content-center">
        <button
          className="btn btn-lg btn-primary"
          onClick={loadMore}
          style={{ width: "220px" }}
        >
          Load More
        </button>
      </Row>
    </>
  );
}
export default Blogs3;

// export async function getStaticProps() {
//   const response = await fetch("/api/search");
//   const data = await response.json();
//   return {
//     props: {
//       datas: data,
//     },
//   };
// }
