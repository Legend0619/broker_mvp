const Clock = ({ color = "#090d2b" }) => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 15.0455C11.615 15.0455 14.5455 12.115 14.5455 8.5C14.5455 4.88505 11.615 1.95455 8 1.95455C4.38505 1.95455 1.45455 4.88505 1.45455 8.5C1.45455 12.115 4.38505 15.0455 8 15.0455ZM8 16.5C12.4183 16.5 16 12.9183 16 8.5C16 4.08172 12.4183 0.5 8 0.5C3.58172 0.5 0 4.08172 0 8.5C0 12.9183 3.58172 16.5 8 16.5Z"
        fill={color}
      />
      <path
        d="M9.89834 11.5L7 8.41499V3.5H8.47874V7.87511L11 10.5675L9.89834 11.5Z"
        fill={color}
      />
    </svg>
  );
};
export default Clock;
