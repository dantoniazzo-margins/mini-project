import styled from "styled-components";

export const SmallCardContainer = styled.div`
  width: 200px;
  height: 100px;
  background-color: darkgray;
  border-radius: 8px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;
