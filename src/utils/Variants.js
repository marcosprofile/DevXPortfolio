export const fadeInLeftVariant = {
  hidden: {
    x: -50,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,

    transition: {
      type: 'tween',
      duration: 1,
    }
  }
}

export const fadeInRightVariant = {
  hidden: {
    x: 50,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,

    transition: {
      type: 'tween',
      duration: 1,
    }
  }
}

export const fadeInTopVariant = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,

    transition: {
      type: 'tween',
      duration: 1,
    }
  }
}

export const fadeInBottomVariant = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,

    transition: {
      type: 'tween',
      duration: 1,
    }
  }
}

export const slideInLeft = {
  hidden: {
    x: '-100vh',
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,

    transition: {
      type: 'tween',
      duration: .5,
    }
  },
  exit: {
    x: '-100vh',
    opacity: 0,

    transition: {
      type: 'tween',
      duration: .5,
    }
  }
}

export const slideInRight = {
  hidden: {
    x: '100vh',
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,

    transition: {
      type: 'tween',
      duration: .5,
    }
  },
  exit: {
    x: '-100vh',
    opacity: 0,

    transition: {
      type: 'tween',
      duration: .5,
    }
  }
}

export const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.4
    }
  }
};

export const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export const carousel = {
  hidden: {
    x: '0%'
  },
  visible: {
    x: ["0%", "-100%"],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 40,
      ease: "linear",
    }
  }
}