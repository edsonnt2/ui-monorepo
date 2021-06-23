import {
  Divider,
  Flex,
  Box,
  Heading,
  VStack,
  Button,
  Link,
  Text,
  Icon,
} from "@chakra-ui/react";
import { Input } from "@/components";
import { FaFacebook } from "react-icons/fa";

export default function Home() {
  return (
    <Flex w="100w" h="100h" direction="row" wrap="wrap">
      <Flex justify="space-between" width="100%" maxW={1280} mx="auto" px="3">
        <Box flex="1">
          <Heading>
            Seja um parceiro, tenha novos clientes e controle o seu negócio.
          </Heading>

          <Text>A forma mais simples de conectar pessoas e empresas</Text>

          <Button>Saiba mais</Button>
        </Box>

        <Flex alignItems="center" direction="column" maxW={320}>
          <Heading fontSize="xl">Comece acessando sua conta Hiwe</Heading>

          <Button
            colorScheme="blue"
            fontWeight="normal"
            fontSize="sm"
            px="3"
            leftIcon={<Icon as={FaFacebook} fontSize="xl" />}
          >
            CONTINUAR COM FACEBOOK
          </Button>

          <Divider color="blue" />

          <Flex as="form">
            <VStack>
              <Input placeholder="Celular ou E-mail" name="phone_email" />
              <Input placeholder="Senha" name="password" />
              <Button>ENTRAR</Button>
              <Link>Esqueci minha senha</Link>
            </VStack>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
