import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>Hello Guys!</div>
      <Link to={"/cursor-selection"}>Cursor Effect</Link>
    </>
  );
}

export default Home;
