import { useMoralis } from "react-moralis"
import { Button, Alert, AlertIcon, Box, AlertTitle, AlertDescription, CloseButton, Input } from '@chakra-ui/react'
import { Heading, Container } from '@chakra-ui/layout'
import { useState } from "react"


const Signup = () => {
  const { signup, isAuthenticated, user } = useMoralis();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  console.log(isAuthenticated, user)


  return <Box>
  <Input placeholder="Username" value={username} onChange={(event) => setUsername(event.currentTarget.value)} />
  <Input placeholder="Email" value={email} onChange={(event) => setEmail(event.currentTarget.value)} />
  <Input placeholder="Password" type="password" value={password} onChange={(event) => setPassword(event.currentTarget.value)} />
  <Button onClick={() => signup(username, password, email)}>Sign up</Button>
  </Box>      

};

const Login = () => {
  const { login, isAuthenticated, user } = useMoralis();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log(isAuthenticated, user)

  return (
  <Box>
  <Input placeholder="Username" value={username} onChange={(event) => setUsername(event.currentTarget.value)} />
  <Input placeholder="Password" type="password" value={password} onChange={(event) => setPassword(event.currentTarget.value)} />
  <Button onClick={() => login(username, password)}>Login</Button>
  </Box>
  )

};



function App() {
  const { authenticate , isAuthenticated, isAuthenticating, authError, logout } = useMoralis()

  if(isAuthenticated){
    return(
      <Container>
        <Heading>Welcome to FootGuns</Heading>
        <Button onClick={() => logout()}>Log Out</Button>
      </Container>
    )
  }
  return (
    <Container>
    <div>FootGuns
      {authError && <Alert status="error">
        <AlertIcon />
        <Box flex="1">
          <AlertTitle>Authentication has failed</AlertTitle>
          <AlertDescription display="block">
            {authError.message}
          </AlertDescription>
        </Box>
        <CloseButton position="absolute" right="8px" top="8px" />
      </Alert>}
    {/* <Button isLoading={isAuthenticating} onClick={() => authenticate()}>
      Authenticate
    </Button> */}

    <Signup />
    <Login />

    </div>
    </Container>
  );
}

export default App;

