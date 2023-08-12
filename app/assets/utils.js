const getSlotsLeft = (mode, registered) => {
  const modeOpt = {
    solo: 100,
    duo: 50,
    squad: 25,
  };
  return modeOpt[mode] - registered;
};

export default getSlotsLeft;
