import styled from "styled-components";

export function Socials() {
  return (
    <Container>
      <Left>
        <Top>
          <Instagram>
            <em>Instagram</em>
          </Instagram>
          <Image src="./images/five.png" />
        </Top>
        <Bottom>
          <Instagram>
            <em>Facebook</em>
          </Instagram>
          <Instagram>
            <em>Pinterest</em>
          </Instagram>
        </Bottom>
      </Left>
      <Right>
        <Text>
          <Title>
            <em>Follow us</em>
          </Title>
          <Links>
            <Services>
              <h3>SERVICES</h3>
              <a>Boutiques</a>
              <a>Contact us</a>
              <a>Shipping</a>
              <a>FAQs</a>
            </Services>
            <Legals>
              <h3>LEGALS</h3>
              <a>Legal Terms</a>
              <a>General Terms & Conditions of Sale</a>
              <a>Personal data & privacy policy</a>
              <a>General Terms of use</a>
            </Legals>
          </Links>
        </Text>
      </Right>
    </Container>
  );
}

const Container = styled.div`
  margin: 10px;
  max-height: 600px;
  display: flex;
`;
const Left = styled.div`
  font-size: 50px;
  width: 50%;
  height: 300px;
  border: 1px solid grey;
`;
const Instagram = styled.div`
  height: 300px;
  width: 50%;
  display: flex;
  align-items: end;
  justify-content: center;
  border: 1px solid gray;
  cursor: pointer;
`;

const Right = styled.div`
  float: right;
  width: 50%;
  max-height: 600px;
  border: 1px solid grey;
`;
const Text = styled.div`
  display: flex;
  height: 540px;
  justify-content: space-between;
  flex-direction: column;
  padding: 40px;
`;
const Title = styled.div`
  font-size: 50px;
  font-family: Source Serif 4, serif;
`;
const Links = styled.div`
  display: flex;
  align-items: end;
  gap: 100px;
`;
const Services = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Legals = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Image = styled.img`
  object-fit: fill;
  width: 50%;
`;
const Top = styled.div`
  display: flex;
  height: 300px;
  justify-content: space-between;
`;
const Bottom = styled.div`
  display: flex;
`;
