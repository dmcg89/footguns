import { Flex, Square, Box, Text, Center, Spacer } from "@chakra-ui/react";

export const PostCard = ({ date, number, title }) => {
  return (
    // <Flex color="gray.400">
    //   <Center w="100px" bg="green.500">
    //     <Text>{number}</Text>
    //   </Center>
    //   <Square bg="orange.300">
    //     <Text>{title}</Text>
    //   </Square>
    //   <Box flex="1" bg="grey.500" size="150px">
    //     <Text>{date}</Text>
    //   </Box>
    //   </Flex>

    <Box borderRadius="md" bg="green.600">
      <Flex borderRadius="md">
        <Box w="70px" h="20">
          <Text fontSize="3xl" vertical-align="middle">
            {number}:
          </Text>
        </Box>

        <Box w="170px" h="20">
          <Text fontSize="3xl" vertical-align="middle">
            {title}
          </Text>
        </Box>

        <Box w="180px" h="20">
          <Text fontSize="3xl" vertical-align="middle">
            {date}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

// import Image from "next/image";
// import {
//   Box,
//   Center,
//   Heading,
//   Text,
//   Stack,
//   Avatar,
//   useColorModeValue,
// } from "@chakra-ui/react";

// export default function blogPostWithImage() {
//   return (
//     <Center py={6}>
//       <Box
//         maxW={"445px"}
//         w={"full"}
//         // bg={useColorModeValue("white", "gray.900")}
//         bg="gray.500"
//         boxShadow={"2xl"}
//         rounded={"md"}
//         p={6}
//         overflow={"hidden"}
//       >
//         <Box
//           h={"210px"}
//           bg={"gray.100"}
//           mt={-6}
//           mx={-6}
//           mb={6}
//           pos={"relative"}
//         >
//           <Image
//             src={
//               "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
//             }
//             layout={"fill"}
//           />
//         </Box>
//         <Stack>
//           <Text
//             color={"green.500"}
//             textTransform={"uppercase"}
//             fontWeight={800}
//             fontSize={"sm"}
//             letterSpacing={1.1}
//           >
//             Blog
//           </Text>
//           <Heading
//             // color={useColorModeValue("gray.700", "white")}
//             coler="gray.700"
//             fontSize={"2xl"}
//             fontFamily={"body"}
//           >
//             Boost your conversion rate
//           </Heading>
//           <Text color={"gray.500"}>
//             Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
//             nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
//             erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
//             et ea rebum.
//           </Text>
//         </Stack>
//         <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
//           <Avatar
//             src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
//             alt={"Author"}
//           />
//           <Stack direction={"column"} spacing={0} fontSize={"sm"}>
//             <Text fontWeight={600}>Achim Rolle</Text>
//             <Text color={"gray.500"}>Feb 08, 2021 · 6min read</Text>
//           </Stack>
//         </Stack>
//       </Box>
//     </Center>
//   );
// }
