import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import styled from "styled-components";

export function Navbar() {
  return (
    <Nav>
      <Left>
        <LocationOnOutlinedIcon />
        <div style={{ marginTop: "5px" }}>USA</div>
      </Left>
      <Middle className="middle">AURUM</Middle>
      <Right className="right">
        <SearchOutlinedIcon />
        <FavoriteBorderOutlinedIcon />
        <ShoppingBagOutlinedIcon />
        <Person2OutlinedIcon />
      </Right>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1% 2%;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  gap: 10px;
`;
const Middle = styled.div``;

const Right = styled.div`
  display: flex;
  gap: 15px;
`;
