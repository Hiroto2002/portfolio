const common = {
  border: "1px solid rgba( 255, 255, 255, 0.05 )",
  marginBottom: "1.25rem",
  padding: "1.5rem",
};

const yellowGlass = {
  background: "rgba( 255, 212, 200, 0.1 )",
  boxShadow: "0 1px 2px 0 rgba( 131, 38, 13, 0.37 )",
  backdropFilter: "blur( 10px )",
  WebkitBackdropFilter: "blur( 10px )",
};

export const yellowRoundedGlass = {
  ...common,
  ...yellowGlass,
  borderRadius: "9999999px",
};

export const yellowCardGlass = {
  ...common,
  ...yellowGlass,
  borderRadius: "10px",
};
