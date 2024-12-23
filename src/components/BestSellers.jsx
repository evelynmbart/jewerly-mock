import styled from "styled-components";

const ITEMS = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1594924571650-3a057547f004?q=80&w=2730&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "14K Gold Pearl Shell Earrings",
    price: 299,
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1665198134143-8c4434d3578b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
    name: "Diamond Gemstone Flower Earrings",
    price: 349,
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1652766540048-de0a878a3266?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ3fHx8ZW58MHx8fHx8",
    name: "Gemstone Wreath Earrings",
    price: 499,
  },
  {
    id: 4,
    src: "https://plus.unsplash.com/premium_photo-1692392181683-77be581a5aaf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
    name: "Modern Opaque Gumdrop Ring",
    price: 799,
  },
  {
    id: 5,
    src: "https://plus.unsplash.com/premium_photo-1681276170092-446cd1b5b32d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGpld2VybHl8ZW58MHx8MHx8fDA%3D",
    name: "1/2 Carat Diamond Pendant Necklace in 14K White Gold",
    price: 950,
  },
  {
    id: 6,
    src: "https://plus.unsplash.com/premium_photo-1681276168324-a6f1958aa191?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUyfHx8ZW58MHx8fHx8",
    name: "Pearl and Diamon Bracelet",
    price: 1199,
  },
  {
    id: 7,
    src: "https://plus.unsplash.com/premium_photo-1675003662150-2569448d2b3b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU4fHx8ZW58MHx8fHx8",
    name: "His and Her's Bands",
    price: 219,
  },
  {
    id: 8,
    src: "https://plus.unsplash.com/premium_photo-1732706751229-7ff87d2cf31d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg1fHx8ZW58MHx8fHx8",
    name: "Solid Gold Matching Necklace and Earrings",
    price: 650,
  },
  //   {
  //     id: 9,
  //     src: "https://plus.unsplash.com/premium_photo-1675003663407-ed9c0de23be1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExMnx8fGVufDB8fHx8fA%3D%3D",
  //     name: "Wedding Tiara",
  //     price: 1350,
  //   },
  //   {
  //     id: 10,
  //     src: "https://plus.unsplash.com/premium_photo-1709033404514-c3953af680b4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0Mnx8fGVufDB8fHx8fA%3D%3D",
  //     name: "18K Yellow Gold Plated Linked Necklace Set",
  //     price: 1200,
  //   },
];

export function BestSellers() {
  return (
    <Container>
      <Title>
        <em>Best Sellers</em>
      </Title>
      <Items>
        {ITEMS.map((item) => {
          return (
            <ItemCard key={item.id}>
              <Image src={item.src} />
              <Text>
                <h3 style={{ cursor: "pointer" }}>{item.name}</h3>
                <p>${item.price}</p>
              </Text>
            </ItemCard>
          );
        })}
      </Items>
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

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const ItemCard = styled.div`
  height: 450px;
  width: 353px;
  border: 1px solid grey;
`;

const Image = styled.img`
  object-fit: fill;
  height: 350px;
  width: 100%;
  cursor: pointer;
`;

const Text = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  padding: 20px 5px 0 5px;
  height: 80px;
  text-align: center;
`;
