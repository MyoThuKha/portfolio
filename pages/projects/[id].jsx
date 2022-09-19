import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();
  const data = router.query;
  return (
    <div className="bodyBox">
      <div className="d-flex align-items-center" style={{ height: "90vh" }}>
        <div
          className="d-flex justify-content-around align-items-center"
          style={{ width: "100vw" }}
        >
          <div className="d-flex align-items-center">
            <div className="me-4">
              <Link href={"/projects"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  className="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                  />
                </svg>
              </Link>
            </div>
            <div className="">
              <div className="h3">{data.title}</div>
              <div className="lead">{data.body}</div>
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
