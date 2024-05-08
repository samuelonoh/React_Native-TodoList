import { ISvgProps } from "../types/types";

const BinSvg = ({ active, ...props }: ISvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke={active ? "#DE1238" : "#36394A"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.25}
      d="M17.5 4.983a84.756 84.756 0 0 0-8.35-.417c-1.65 0-3.3.084-4.95.25l-1.7.167"
    />
    <path
      stroke={active ? "#DE1238" : "#36394A"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.25}
      d="m7.084 4.141.183-1.092c.134-.791.234-1.383 1.642-1.383h2.183c1.409 0 1.517.625 1.642 1.392l.184 1.083"
      opacity={0.34}
    />
    <path
      stroke={active ? "#DE1238" : "#36394A"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.25}
      d="m15.71 7.617-.542 8.392c-.091 1.308-.166 2.325-2.491 2.325h-5.35c-2.326 0-2.4-1.017-2.492-2.325l-.542-8.392"
    />
    <path
      stroke={active ? "#DE1238" : "#36394A"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.25}
      d="M8.61 13.75h2.774M7.916 10.416h4.167"
      opacity={0.34}
    />
  </svg>
);
export default BinSvg;
