import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import styled from "styled-components";
export function Hero() {
  return (
    <Container>
      <MainImage>
        <Image src="./images/three.png" />
        <Text>
          <h1
            style={{
              fontSize: "80px",
              fontWeight: "normal",
              fontFamily: "Source Serif 4",
            }}
          >
            <em>
              Not once, <br /> but forever
            </em>
          </h1>
          <p style={{ fontFamily: "Funnel Sans" }}>
            The latest collection of world brands, new names and trends - a new
            style for every occasion with AURUM
          </p>
        </Text>
      </MainImage>
      <Bottom>
        <Left>
          <TextBox>
            <h3
              style={{
                fontSize: "50px",
                fontWeight: "normal",
                cursor: "pointer",
              }}
            >
              <em>Gifts for her</em>
            </h3>
            <p
              style={{
                fontFamily: "Funnel Sans",
              }}
            >
              Finding the perfect gift for the special woman in your life just
              got easier! Explore our curated collection of thoughtful, unique,
              and stunning gifts designed to make her feel truly cherished.
              <ArrowIcon>
                <TrendingFlatIcon style={{ cursor: "pointer" }} />
              </ArrowIcon>
            </p>
          </TextBox>
        </Left>
        <Right>
          <Image2 src="./images/four.png" />
        </Right>
      </Bottom>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 10px;
`;
const MainImage = styled.div`
  height: 100vh;
`;
const Text = styled.div`
  position: relative;
  width: 400px;

  padding-top: 300px;
  padding-left: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Image = styled.img`
  height: 100%;
  width: 98.5%;
  object-fit: fill;
  position: absolute;
`;

const Bottom = styled.div`
  display: flex;
`;
const Left = styled.div`
  width: 50%;
  height: 600px;
  border: 1px solid grey;
`;
const TextBox = styled.div`
  font-family: "Source Serif 4", serif;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 70%;
  width: 80%;
  padding: 40px;
`;

const ArrowIcon = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
`;
const Right = styled.div`
  width: 50%;
  border: 1px solid grey;
  height: 600px;
`;

const Image2 = styled.img`
  object-fit: cover;
  height: 600px;
  width: 100%;
`;
