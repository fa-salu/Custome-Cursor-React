"use client";

import { Link } from "react-router-dom";
import RippleCursor from "../../Animation/Cursor/RippleCursor";

const RippleCursorPage: React.FC = () => (
  <div>
    <RippleCursor />
    <h2 className="text-center mt-10">This is the Ripple Cursor Effect</h2>
    <Link to={"/cursor-selection"}>Back</Link>
  </div>
);

export default RippleCursorPage;
