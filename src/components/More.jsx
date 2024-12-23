import styled from "styled-components";
export function More() {
  return (
    <Container>
      <Title>
        <em>If you want more</em>
      </Title>
      <Content>
        <LeftImage src="./images/two.png" />
        <Right>
          <Box>
            <h3
              style={{
                fontSize: "50px",
                fontWeight: "normal",
                cursor: "pointer",
                fontFamily: "Source Serif 4",
                marginBottom: "30px",
              }}
            >
              <em>Categories</em>
            </h3>
            <Links>
              <a>Earrings</a>
              <a>Necklaces</a>
              <a>Bracelets</a>
              <a>Rings</a>
              <a style={{ textDecoration: "underline" }}>View more</a>
            </Links>
          </Box>
          <Box>
            <h3
              style={{
                fontSize: "50px",
                fontWeight: "normal",
                cursor: "pointer",
                fontFamily: "Source Serif 4",
                marginBottom: "30px",
              }}
            >
              <em>Collections</em>
            </h3>
            <Links>
              <a>What to give?</a>
              <a>Modern</a>
              <a>Vintage</a>
              <a>Oversize</a>
              <a style={{ textDecoration: "underline" }}>View More</a>
            </Links>
          </Box>
        </Right>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  margin: 10px;
`;
const Title = styled.div`
  font-size: 50px;
  border-bottom: 1px solid grey;
  font-family: Source Serif 4, serif;
  padding: 10px 40px;
`;

const Content = styled.div`
  display: flex;
  height: 800px;
`;
const LeftImage = styled.img`
  object-fit: fill;
  width: 50%;
`;
const Right = styled.div`
  width: 50%;
  height: 800px;
`;
const Box = styled.div`
  border: 1px solid grey;
  width: 88%;
  height: 39.75%;
  padding: 40px;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  font-size: 20px;
  text-transform: uppercase;
  cursor: pointer;
`;
