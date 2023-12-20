import { Heading } from "@chakra-ui/react";

interface GreetingsProps {
  name: string;
}

export default function Greetings({ name }: GreetingsProps) {
  return <Heading>{name}</Heading>;
}
