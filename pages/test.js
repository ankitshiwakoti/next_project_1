import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Placeholder from "react-bootstrap/Placeholder";
import Col from "react-bootstrap/Col";

import img from "../public/assets/faq.png";
import back from "../public/assets/client.png";
import Image from "next/image";
import Hero from "@/components/hero";
import Search from "@/components/search";

function ContainerExample() {
  return (
    <>
      <section className="Hero pt-5" style={{ backgroundColor: "#f0b27c" }}>
        <Container>
          <Hero />
          <Search />
        </Container>
      </section>
    </>
  );
}

export default ContainerExample;
