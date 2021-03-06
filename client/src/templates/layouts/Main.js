import styled from "styled-components";
import { theme, mq } from "constants/theme";
const { offWhite } = theme.colors;

const Main = styled.main`
  padding-top: 4rem;
  display: flex;
  align-items: inherit;
  justify-content: center;

  min-height: calc(100% - 119px);

  @media screen and (min-width: ${mq.tablet.narrow.minWidth}) {
    background-color: ${offWhite};
    padding-top: 7rem;

    min-height: calc(100% - 9rem);
  }
`;

export default Main;
