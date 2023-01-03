import art from "./drawing.svg";

const component = () => {
  const art1 = new Image();
  art1.src = art;
  return art1;
};

export default component;
