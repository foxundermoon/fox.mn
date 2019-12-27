export default props => (
  <svg
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    { ...props }
  >
    <path className="colored outer" d="M0,16V0H16V16ZM3,3V13H8V5h3v8h2V3Z"/>
    <path className="colored inner" d="M3,3H13V13H11V5H8v8H3Z"/>
  </svg>
);
