import { Container, Text, VStack, Box, Input, Button, HStack, Flex, Avatar, IconButton } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "You" }]);
      setInput("");
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={4} width="100%">
        <Flex width="100%" justifyContent="space-between" alignItems="center" p={4} bg="teal.500" borderRadius="md" color="white">
          <Avatar name="User" src="https://bit.ly/broken-link" />
          <Text fontSize="2xl" fontWeight="bold">Chat App</Text>
          <Box></Box>
        </Flex>
        <Box width="100%" height="60vh" border="1px solid #ccc" borderRadius="md" overflowY="scroll" p={4} bg="gray.50">
          {messages.map((msg, index) => (
            <Box key={index} alignSelf={msg.sender === "You" ? "flex-end" : "flex-start"} mb={2} bg={msg.sender === "You" ? "teal.100" : "gray.200"} p={2} borderRadius="md">
              <Text>{msg.sender}: {msg.text}</Text>
            </Box>
          ))}
        </Box>
        <HStack width="100%" spacing={2}>
          <Input
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            bg="white"
            borderRadius="full"
            px={4}
            py={2}
            boxShadow="sm"
          />
          <IconButton
            icon={<FaPaperPlane />}
            onClick={handleSend}
            colorScheme="teal"
            borderRadius="full"
            boxShadow="sm"
          />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;