"use client";

import { Link } from "react-router-dom";
import AnimatedCursor from "../../Animation/Cursor/AnimatedCursor";

const AnimatedCursorPage: React.FC = () => (
  <div>
    <AnimatedCursor />
    <h2 className="text-center mt-10">This is the Animated Cursor Effect</h2>
    <Link to={"/cursor-selection"}>Back</Link>
  </div>
);

export default AnimatedCursorPage;
