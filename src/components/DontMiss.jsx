import styled from "styled-components";
export function DontMiss() {
  return (
    <Container>
      <Left>
        <Title>
          <em>Don't miss anything</em>
        </Title>
        <p>
          Subscribe to our newsletter and be the first to learn about our latest
          and hotest trends
        </p>
      </Left>
      <Right>
        <Input type="email" placeholder="Your e-mail" />
        <Button>Subscribe</Button>
      </Right>
    </Container>
  );
}

const Container = styled.div`
  margin: 10px;
  width: 100%;
  display: flex;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px 40px;
  width: 50%;
`;
const Title = styled.div`
  font-size: 50px;
  font-family: Source Serif 4, serif;
`;

const Right = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 50%;
  padding: 8px 0;
  text-indent: 5px;
  height: 20px;
  font-size: 15px;
  border-radius: 0;
`;
const Button = styled.button`
  text-transform: uppercase;
  width: 50%;
  padding: 10px 0;
  height: 40px;
  background-color: black;
  border: none;
  color: white;
`;
