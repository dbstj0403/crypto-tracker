import { useState } from "react";
import styled from "styled-components";
import { useParams, useLocation } from "react-router-dom";
const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 48px;
`;
const Container = styled.div`
  padding: 0px 20px;
`;
const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Loader = styled.div`
  text-align: center;
  display: block;
`;
interface RouteState {
  state: { name: string };
}
function Coin() {
  const { coinId } = useParams();
  const [loading, setLoading] = useState(false);
  const { state } = useLocation() as RouteState;
  console.log(state.name);
  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading..."}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}
export default Coin;
