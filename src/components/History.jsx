import styled from "styled-components";
export function History() {
  return (
    <Container>
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
              <em>Our History</em>
            </h3>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <p
                style={{
                  fontFamily: "Funnel Sans",
                }}
              >
                Founded in Paris in 1847, AURUM. quickly became a symbol of
                elegance and exceptional craftsmanship. What began as a small
                workshop on Rue de la Paix evolved into one of the world’s most
                prestigious jewelry houses, known for blending traditional
                techniques with innovative design. Over the years, its creations
                have captivated royalty, celebrities, and collectors, earning a
                reputation for timeless beauty and sophistication.
              </p>
              <p
                style={{
                  fontFamily: "Funnel Sans",
                }}
              >
                With a rich history of pioneering designs and the use of rare
                gemstones, AURUM. continues to lead the industry in haute
                joaillerie. Today, the brand remains dedicated to creating
                exquisite, iconic pieces that honor its heritage while embracing
                the future of luxury jewelry.
              </p>
              <a
                style={{
                  textDecoration: "underline",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
              >
                View more
              </a>
            </div>
          </TextBox>
        </Left>
        <Right>
          <Image2 src="./images/six.png" />
        </Right>
      </Bottom>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 10px;
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
  height: 80%;
  width: 80%;
  padding: 40px;
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
