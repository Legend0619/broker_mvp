const TickCircle = ({ color = "#0077D8" }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="8" r="7" fill={color} />
      <path
        d="M4.57129 8.40392L6.57129 10.2863L11.4284 5.71484"
        stroke="white"
        strokeWidth="1.5"
      />
      <circle cx="8" cy="8" r="7.25" stroke="white" strokeWidth="1.5" />
    </svg>
  );
};
export default TickCircle;
