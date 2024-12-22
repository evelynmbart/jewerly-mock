import styled from "styled-components";

export function Hero() {
  return (
    <Container>
      <MainImage>
        <Image src="./images/three.png" />
      </MainImage>
      <Bottom>
        <Left></Left>
        <Right></Right>
      </Bottom>
    </Container>
  );
}

const Container = styled.div`
  padding: 5px;
`;
const MainImage = styled.div``;
const Image = styled.img`
  width: 100%;
  height: 80%;
  object-fit: fill;
`;

const Bottom = styled.div``;
const Left = styled.div``;
const Right = styled.div``;
