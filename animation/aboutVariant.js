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
    },
  },
};

export { leftSideVariant, rightSideVariant };
