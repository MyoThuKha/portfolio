import { titleVariant } from "./homeVariant";

const leftSideVariant = {
  before: {
    opacity: 0,
    x: "-100vw",
  },
  after: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      when: "beforeChildren",
    },
  },
};
const rightSideVariant = {
  before: {
    opacity: 0,
    x: "100vw",
  },
  after: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      when: "beforeChildren",
    },
  },
};
const arrowVariant = {
  before: {
    opacity: 0,
  },
  after: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
    },
  },
};

export { leftSideVariant, rightSideVariant, arrowVariant };
