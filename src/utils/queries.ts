import styled from "@emotion/styled";

const breakpoints: { [index: string]: number } = {
  sm: 500,
  md: 768,
  lg: 992,
  xl: 1200,
};

const mq = Object.keys(breakpoints)
  .map((key) => [key, breakpoints[key]] as [string, number])
  .reduce((prev, [key, breakpoint]) => {
    prev[key] = `@media (min-width: ${breakpoint}px)`;
    return prev;
  }, {} as { [index: string]: string });

export default mq;
