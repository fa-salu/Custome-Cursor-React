"use client";

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AnimatedCursorPage from "./Pages/Cursor/AnimatedCursor";
import RippleCursorPage from "./Pages/Cursor/RippleCursor";
import RoundCursorPage from "./Pages/Cursor/RoundCursor";
import TrailingCursorPage from "./Pages/Cursor/TrailingCursor";
import CursorSelection from "./Animation/CursorSelection";

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cursor-selection" element={<CursorSelection />} />
    <Route path="/animated" element={<AnimatedCursorPage />} />
    <Route path="/ripple" element={<RippleCursorPage />} />
    <Route path="/round" element={<RoundCursorPage />} />
    <Route path="/trailing" element={<TrailingCursorPage />} />
  </Routes>
);

export default App;
