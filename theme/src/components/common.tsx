import styled from "styled-components";
import Theme from "../styles/theme";

export const Container = styled.div`
  width: ${Theme.components.container.width};
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;

  @media (max-width: ${Theme.breakpoints.xl}) {
    padding: 0 20px;
  }
`;

export interface GridProps {
  columns?: {[size in keyof typeof Theme.breakpoints]?: number}
}

export const Grid = styled(Container)<GridProps>`
  display: grid;
  grid-template-columns: repeat(${({columns}) => (columns && columns.xl) || 3}, 1fr);
  grid-gap: 30px;

  @media (max-width: ${Theme.breakpoints.lg}) {
    grid-template-columns: repeat(${({columns}) => (columns && columns.lg) || 3}, 1fr);
  }

  @media (max-width: ${Theme.breakpoints.md}) {
    grid-template-columns: repeat(${({columns}) => (columns && columns.md) || 3}, 1fr);
  }

  @media (max-width: ${Theme.breakpoints.sm}) {
    grid-template-columns: repeat(${({columns}) => (columns && columns.sm) || 1}, 1fr);
    padding: 0 20px;
  }

  @media (max-width: ${Theme.breakpoints.xs}) {
    grid-template-columns: repeat(${({columns}) => (columns && columns.xs) || 1}, 1fr);
  }
`;
