const titleVariant = {
  before: {
    opacity: 0,
  },
  after: {
    opacity: 1,
    transition: {
      duration: 1.1,
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
};

const textVariant = {
  before: {
    opacity: 0,
    x: "-100vw",
  },
  after: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
    },
  },
};

const boxVariant = {
  before: {
    opacity: 0,
    y: "-100vh",
  },
  after: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
    },
  },
  hover: {
    scale: 1.1,
  },
};

export { titleVariant, textVariant, boxVariant };
