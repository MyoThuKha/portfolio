import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className="bodyBox">
      <div className="titleHeader">About</div>
      <section>
        <article>
          <div style={{ width: 300 }}>
            <div className="lead mt-2 mb-2">Background</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              et. Odit explicabo dolorem delectus unde, eos perspiciatis esse
              laborum! Nostrum.
            </div>
          </div>
        </article>

        <article>
          <div style={{ width: 300 }} className="">
            <div className="lead mt-4">Education</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis optio corporis sed beatae animi ipsum repellat tenetur
              iste illum aut.
            </div>
          </div>
        </article>

        <article className="d-flex justify-content-end">
          <div style={{ width: 300 }}>
            <div className="lead mt-4 mb-2">Skills</div>
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
              nostrum quae consectetur fugit delectus, dolorem magnam similique
              aspernatur? Soluta accusantium, architecto quaerat quo voluptatem
              debitis!
            </div>
          </div>
        </article>
        <article>
          <div style={{ width: 300 }}>
            <div className="lead mt-4 mb-2">Hobbies</div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Suscipit, temporibus commodi necessitatibus facere itaque harum
              illum repellendus perferendis, ex voluptatum dolorum tempore
              aliquid deserunt quo earum cupiditate totam? Vitae obcaecati ad
              atque! Nisi maiores porro quo assumenda culpa facere in?
            </p>
          </div>
        </article>

        <h4></h4>
      </section>
    </div>
  );
}
