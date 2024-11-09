export interface CursorPosition {
  x: number;
  y: number;
}

export interface CursorState {
  isHovered: boolean;
  position: CursorPosition;
}
