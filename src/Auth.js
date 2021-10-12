import { useState } from "react";
import { useMoralis } from "react-moralis";
import { Button, Input, Stack, Text } from "@chakra-ui/react";
import { ErrorBox } from "./Error";

const Signup = () => {
  const { signup, isAuthenticated, user } = useMoralis();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  console.log(isAuthenticated, user);

  return (
    <Stack spacing={3}>
      <Input
        placeholder="Username"
        value={username}
        onChange={(event) => setUsername(event.currentTarget.value)}
      />
      <Input
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.currentTarget.value)}
      />
      <Input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.currentTarget.value)}
      />
      <Button onClick={() => signup(username, password, email)}>Sign up</Button>
    </Stack>
  );
};

const Login = () => {
  const { login, isAuthenticated, user } = useMoralis();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log(isAuthenticated, user);

  return (
    <Stack spacing={3}>
      <Input
        placeholder="Username"
        value={username}
        onChange={(event) => setUsername(event.currentTarget.value)}
      />
      <Input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.currentTarget.value)}
      />
      <Button onClick={() => login(username, password)}>Login</Button>
    </Stack>
  );
};

export const Auth = () => {
  const { authenticate, isAuthenticating, authError } = useMoralis();

  return (
    <Stack spacing={6}>
      {authError && (
        <ErrorBox
          title="Authentication has failed"
          message={authError.message}
        />
      )}
      <Button isLoading={isAuthenticating} onClick={() => authenticate()}>
        Authenticate via MetaMask
      </Button>
      <Text textAlign="center">
        <em>or</em>
      </Text>
      <Signup />
      <Text textAlign="center">
        <em>or</em>
      </Text>
      <Login />
    </Stack>
  );
};
