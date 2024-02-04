"use client";
import { Button, Flex, Heading, Input } from "@chakra-ui/react";
import { useState } from "react";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/client";
import { LoginDocument, LoginMutation } from "@/graphql/generated/graphql";

const LOGIN = gql`
  mutation Login {
    login(
      loginUserInput: { email: "test@example.com", password: "password12345" }
    ) {
      user {
        name
        email
      }
      access_token
    }
  }
`;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { data, loading, error } = useQuery(LOGIN);
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background="gray.100" padding={12} rounded={6}>
        <Heading mb={6}>Log in</Heading>{" "}
        <Input
          placeholder="sample@sample.com"
          bg="white"
          mb={3}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="********"
          bg="white"
          mb={6}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button mb={3} colorScheme="teal">
          Log in
        </Button>
        <Button mb={6} colorScheme="teal">
          crete New Account
        </Button>
      </Flex>
    </Flex>
  );
}
