import Image from "next/image";

const DetailPage = () => {
  return (
    <div className="bodyBox">
      <div className="d-flex align-items-center" style={{ height: "90vh" }}>
        <div
          className="d-flex justify-content-around align-items-center"
          style={{ width: "100vw" }}
        >
          <div className=" d-inline-block">
            <div className="h3">Note App</div>
            <div className="lead">
              Simple note app written with react native
            </div>
          </div>
          <div className="d-inline-block border border-5 border-secondary rounded-5 overflow-hidden">
            <Image
              src={"/note-app.jpg"}
              alt="note app"
              width="220"
              height="450"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
