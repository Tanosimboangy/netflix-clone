import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  border-bottom: 8px solid #222;
`;

export const Frame = styled.section`
  margin-bottom: 10px;
  max-width: 1200px;
`;

export const Inner = styled.section`
  display: flex;
  padding: 70px 45px;
  flex-direction: column;
  max-width: 815px;
  margin: auto;
`;

export const Item = styled.section`
  color: white;
  margin-bottom: 10px;

  &:first-of-type {
    margin-top: 3em;
  }
`;

export const Title = styled.section`
  font-size: 50px;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 8px;
  color: white;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const Header = styled.section`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 1px;
  font-size: 26px;
  font-weight: normal;
  box-sizing: border-box;
  background: #303030;
  padding: 0.8em 1.2em 0.8em 1.2em;
  user-select: none;
  align-items: center;

  img {
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 600px) {
      width: 16px;
    }
  }

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;
export const Body = styled.section`
  /* max-width: 1200px; */
  font-size: 26px;
  line-height: normal;
  box-sizing: border-box;
  transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  padding: 0.8em 1.2em 0.8em 1.2em;
  user-select: nonw;
  align-items: center;
  background: #303030;
  font-weight: normal;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
