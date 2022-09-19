import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const projectList = [
    {
      title: "Note App",
      body: "Note app written with react native and redux",
      url: "https://github.com/MyoThuKha/note-app",
      key: "1",
    },
    {
      title: "To Do App",
      body: "Single Page React native Project",
      url: "https://github.com/MyoThuKha/todo-app",
      key: "2",
    },
    {
      title: "Simple Calculator",
      body: "Calcular I created with react native",
      url: "https://github.com/MyoThuKha/calculator",
      key: "3",
    },
    {
      title: "Coffee App",
      body: "Flutter project using firebase",
      url: "https://github.com/MyoThuKha/Coffee-App",
      key: "4",
    },
    // {
    //   title: "Pizza order",
    //   body: "React and Framer-motion",
    //   url: "",
    //   key: "5",
    // },
    {
      title: "Another Note App",
      body: "Flutter app using sqflite",
      url: "https://github.com/MyoThuKha/Simple-Note-App",
      key: "5",
    },
  ];

  return (
    <div>
      <div className="bodyBox">
        <div className="titleHeader">Projects</div>

        <div style={{ width: 500 }}>
          {projectList.map((item) => {
            return (
              <div className="" key={item.key}>
                <Link
                  href={{ pathname: "/projects/" + item.key, query: item }}
                  as={"/projects/" + item.key}
                >
                  {/* <Link href={"#" + item.key}> */}
                  <a className="baseLink">{item.title}</a>
                </Link>
                <hr />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
