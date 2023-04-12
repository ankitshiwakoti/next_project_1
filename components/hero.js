import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Placeholder from "react-bootstrap/Placeholder";
import Col from "react-bootstrap/Col";

import img from "../public/assets/faq.png";
import back from "../public/assets/client.png";
import Image from "next/image";

function Hero({ blog }) {
  console.log(blog);
  return (
    <Row
      className="Hero d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "#f0b27c" }}
    >
      <Col className="col-md-9 col-12 order-md-1 order-2 pt-5 ">
        <h1 className="">{blog.title}</h1>
        <p className="pt-3" style={{ fontSize: "18px" }}>
          {blog.reports_title}
        </p>
      </Col>
      <Col className="col-md-3 col-12 order-md-2 order-1  ">
        <Image src={img} alt="Picture of the author" className="img-fluid" />
      </Col>
    </Row>
  );
}
export default Hero;
