const dataPixels = () => {
  const data = new Array(500);
  for (let i = 0; i < 500; i++) {
    data[i] = new Array(500);
    for (let j = 0; j < 500; j++) {
      data[i][j] = { x: j, y: i, color: "white" };
    }
  }
  return data;
};

export default dataPixels;
