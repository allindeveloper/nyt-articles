import styled from "styled-components"

export const StyledHeader = styled.header`
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: center;
  position:fixed;
  top:0;
  left:0;
  z-index: 999;
  background-color: ${(props) => props.theme.pallete.primary.main};
  p {
      font-weight: 600;
      color: ${(props) => props.theme.pallete.white};
  }
  color: ${(props) => props.theme.pallete.white};
  width: 100%;
`