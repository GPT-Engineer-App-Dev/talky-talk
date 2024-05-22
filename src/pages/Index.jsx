import { Container, Text, VStack, Box, Input, Button, HStack, Flex } from "@chakra-ui/react";
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
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Chat App</Text>
        <Box width="100%" height="60vh" border="1px solid #ccc" borderRadius="md" overflowY="scroll" p={4}>
          {messages.map((msg, index) => (
            <Box key={index} alignSelf={msg.sender === "You" ? "flex-end" : "flex-start"} mb={2}>
              <Text>{msg.sender}: {msg.text}</Text>
            </Box>
          ))}
        </Box>
        <HStack width="100%">
          <Input
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
          />
          <Button onClick={handleSend}>Send</Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;