const nameVariant = {
  before: {
    opacity: 0,
    y: "100vh",
  },
  after: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1,
    },
  },
};
const nameVariant2 = {
  before: {
    y: "-100vh",
    opacity: 0,
  },
  after: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
    },
  },
};
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

export { leftSideVariant, rightSideVariant, nameVariant, nameVariant2 };
