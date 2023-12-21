import { Avatar, Box, Flex } from "@chakra-ui/react";

export default function Photo() {
  const size = "40px";

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      h="216px"
      w="full"
      overflow="hidden"
    >
      {/* Ideally, only the box should be used. The <Flex /> is used to style the preview. */}
      <Box as="div" position="relative" w={size} h={size}>
        <Avatar
          src="https://avatars.githubusercontent.com/u/103638279?s=96&v=4"
          size="full"
          position="absolute"
          top={0}
        />
      </Box>
      {/* <p align="center">
  <a href="https://github.com/DenverCoder1/readme-typing-svg">
    <img src="https://readme-typing-svg.demolab.com/?lines=🙏🙏 नमस्ते! ; I am a Full-stack%20web%20developer 👨🏻‍💻;  Curious%20to%20learn%20new%20things !&font=Fira%20Code&center=true&width=440&height=45&color=#37bcf7&vCenter=true&size=22&pause=1000"/></a>
</p> */}
    </Flex>
  );
}
