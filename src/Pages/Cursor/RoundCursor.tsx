"use client";

import { Link } from "react-router-dom";
import RoundCursor from "../../Animation/Cursor/RoundCursor";

const RoundCursorPage: React.FC = () => (
  <div>
    <RoundCursor />
    <h2 className="text-center mt-10">This is the Round Cursor Effect</h2>
    <Link to={"/cursor-selection"}>Back</Link>
  </div>
);

export default RoundCursorPage;
