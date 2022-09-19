import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const projectList = [
    {
      title: "Note App",
      body: "Simple note app written with react native",
      key: "1",
    },
    {
      title: "To Do App",
      body: "",
      key: "2",
    },
    {
      title: "Simple Calculator",
      body: "",
      key: "3",
    },
    {
      title: "Coffee App",
      body: "Simple note app written with react native",
      key: "4",
    },
    {
      title: "Pizza order",
      body: "Simple note app written with react native",
      key: "5",
    },
    {
      title: "Another Note App",
      body: "Simple note app written with react native",
      key: "6",
    },
  ];

  return (
    <div>
      <div className="bodyBox">
        <div className="titleHeader">Projects</div>

        <div style={{ width: 500 }}>
          {projectList.map((item) => {
            return (
              <div className="tableItem" key={item.key}>
                <Link href={"/projects/" + item.key}>
                  {/* <Link href={"#" + item.key}> */}
                  <a className="baseLink">{item.title}</a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
