import Subscribe from "@/components/Subscribe";
import Blogs from "@/components/blogs";
import Blogs3 from "@/components/blogs3";
import Hero from "@/components/hero";
import Search from "@/components/search";
import Slider from "@/components/slider";
import React from "react";
import { Container } from "react-bootstrap";

const Blog = ({ blogsRes }) => {
  const sample = [
    {
      title: "All Blogs",
      heading: "CDR report got rejected by engineer Australia; now What?",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      id: 1,
    },
    {
      title: "CDR Service",
      heading: "Engineers migrating to Australia choose us for CDR writing",
      paragraph:
        "It is the first and simplest step in problem-solving. It organizes the steps/sequence required to formulate one goal out of multiple goals as well as actions to achieve that goal. Goal formulation is based on the current situation and the agent's performance measure (discussed below)  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodos",
      id: 2,
    },
    {
      title: "Skill Assessment",
      heading: "Engineers migrating to Australia choose us for CDR writing ",
      paragraph:
        "the problem implicitly. State-space of a problem is a set of all states which the problem implicitly. State-space of a problem is a set of all states which can be reached from the initial state followed by any sequence of actions. The state-space forms a directed map or graph where nodes are the states, links between the nodes are actions, and the path",
      id: 3,
    },
    {
      title: "Australian migraton",
      heading:
        "Project name:Simple art is a kind of things that matters a lot ",
      paragraph:
        "the problem implicitly. State-space of a problem is a set of all states which the problem implicitly. State-space of a problem is a set of all states which can be reached from the initial state followed by any sequence of actions. The state-space forms a directed map or graph where nodes are the states, links between the nodes are actions, and the path",
      id: 3,
    },
  ];

  return (
    <section>
      <section style={{ backgroundColor: "#f0b27c" }}>
        <Container>
          <Hero blog={blogsRes} />
        </Container>
      </section>
      <Container>
        <Search data={sample} />
        <Blogs />
        <Blogs3 data={sample} />
        {/* <Subscribe /> */}
        <Slider />
      </Container>
    </section>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const { NEXT_PUBLIC_API_URL } = process.env;
  const blogs = await fetch(NEXT_PUBLIC_API_URL + "landing?populate=deep");
  const blogsRes = await blogs.json();
  return {
    props: {
      blogsRes: blogsRes?.data?.attributes,
    },
    revalidate: 1,
  };
};
