import { useMoralis } from "react-moralis";
import { Button } from "@chakra-ui/react";
import { Heading, Container } from "@chakra-ui/layout";
import { Auth } from "./Auth";

function App() {
  const { isAuthenticated, logout } = useMoralis();

  if (isAuthenticated) {
    return (
      <Container>
        <Heading textAlight="center " mb={6}>
          Welcome to FootGuns
        </Heading>
        <Button onClick={() => logout()}>Log Out</Button>
      </Container>
    );
  }
  return (
    <Container>
      <Heading textAlight="center " mb={6}>
        Welcome to FootGuns
      </Heading>
      <Auth />
    </Container>
  );
}

export default App;
