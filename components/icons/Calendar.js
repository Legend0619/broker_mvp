const CalendarIcon = ({ color = "#00ad20" }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 1.33333V0H11.6667V1.33333H4.33333V0H3V1.33333H0V16H16V1.33333H13ZM14.6667 14.6667H1.33333V6.33333H14.6667V14.6667ZM1.33333 5V2.66667H14.6667V5H1.33333Z"
        fill={color}
      />
      <path d="M12.6667 10H10V12.6667H12.6667V10Z" fill={color} />
    </svg>
  );
};
export default CalendarIcon;
