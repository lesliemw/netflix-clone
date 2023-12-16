import styled from "styled-components";
import FilmsScreen from "../features/films/FilmsScreen";

const StyledFilmsScreen = styled.div`
  overflow: hidden;
`;
function Films() {
  return (
    <StyledFilmsScreen>
      <FilmsScreen />
    </StyledFilmsScreen>
  );
}

export default Films;
