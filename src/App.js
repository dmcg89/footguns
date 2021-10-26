import { ByMoralis, useMoralis } from "react-moralis";
import { Button, Flex, Avatar, Box } from "@chakra-ui/react";
import { Heading, Container, Spacer } from "@chakra-ui/layout";
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { Auth } from "./components/Auth";
import { Home } from "./components/Home";
import { Profile } from "./components/Profile";

function App() {
  const { isAuthenticated, logout, user, isAuthUndefined } = useMoralis();

  // console.log(user.get("objectId"));

  // console.log(user.get("objectId"));
  // const query = new Moralis.Query(Moralis.User);

  return (
    <Container>
      <Flex my={6}>
        <Link to="/" exact>
          Home
        </Link>
        <Spacer />
        {isAuthenticated && (
          <Link to="/profile" exact>
            <Avatar name={user.attributes.username} />
          </Link>
        )}
      </Flex>
      <Heading textAlign="center " mb={6}>
        Welcome to FootGuns{" "}
        {user ? user.attributes.username : "authenticate please"}
      </Heading>

      <Heading textAlign="center " mb={6}>
        Welcome to FootGuns {user ? user.attributes.objectId : "check"}
      </Heading>

      {isAuthenticated ? (
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/profile" exact>
            <Profile />
          </Route>
        </Switch>
      ) : (
        <>
          {!isAuthUndefined && <Redirect to="/" />}
          <Auth />
        </>
      )}
      <Box mt={6}>
        <Button onClick={() => logout()}>Log Out</Button>
      </Box>
      <Box mt={6}>
        <ByMoralis />
      </Box>
    </Container>
  );
  // look up exact keywords react router docs

  //   if (isAuthenticated) {
  //   return (
  //     <Container>
  //       <Heading textAlign="center " mb={6}>
  //         Welcome to FootGuns {user.attributes.username}
  //       </Heading>
  //       <Button onClick={() => logout()}>Log Out</Button>
  //     </Container>
  //   );
  // }
  // return (
  //   <Container>
  //     <Heading textAlight="center " mb={6}>
  //       Welcome to FootGuns
  //     </Heading>
  //     <Auth />
  //   </Container>
  // );
}
export default App;
