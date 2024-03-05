import styled from "styled-components";

const MainHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = () => {
  return <MainHeader className="app-header"></MainHeader>;
};

export default Header;
