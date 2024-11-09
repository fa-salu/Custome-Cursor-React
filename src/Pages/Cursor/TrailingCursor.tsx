"use client";

import { Link } from "react-router-dom";
import TrailingCursor from "../../Animation/Cursor/TrailingCursor";

const TrailingCursorPage: React.FC = () => (
  <div>
    <TrailingCursor />
    <h2 className="text-center mt-10">This is the Trailing Cursor Effect</h2>
    <Link to={"/cursor-selection"}>Back</Link>
  </div>
);

export default TrailingCursorPage;
