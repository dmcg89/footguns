import { Box, Input, Text, Stack, Button } from "@chakra-ui/react";
import { useMoralis } from "react-moralis";
import { useState } from "react";
import { ErrorBox } from "./Error";

export const Profile = () => {
  const { user, setUserData, userError, isUserUpdating } = useMoralis();
  const [username, setUsername] = useState(user.attributes.username);
  const [email, setEmail] = useState(user.attributes.email);
  const [password, setPassword] = useState(user.attributes.password);

  const handleSave = () => {
    setUserData({
      username,
      email,
      password: password === "" ? undefined : password,
    });
  };

  return (
    <Box>
      <Stack spacing={3}>
        {userError && (
          <ErrorBox title="User change failed" message={userError.message} />
        )}
        <Box>
          <Text>Username</Text>
          <Input
            value={username}
            onChange={(event) => setUsername(event.currentTarget.value)}
          />
        </Box>
        <Box>
          <Text>Email</Text>
          <Input
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
          />
        </Box>
        <Box>
          <Text>Password</Text>
          <Input
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
          />
        </Box>
        <Button onClick={handleSave} isLoading={isUserUpdating}>
          Save Changes
        </Button>
      </Stack>
    </Box>
  );
};
