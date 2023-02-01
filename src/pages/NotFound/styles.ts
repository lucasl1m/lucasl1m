import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
  overflow: hidden;

  padding: 0 0 2.5rem 0;

  > img {
    position: absolute;
    width: 100%;
    height: 100%;;
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  > img {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`
