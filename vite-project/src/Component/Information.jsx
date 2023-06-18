// import React from 'react'
import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Avatar,
  FormControl,

} from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom'
const CFaUserAlt = chakra(FaUserAlt);
// const CFaLock = chakra(FaLock);
export default function Information() {
    const [name , setName]=useState("")
    const [text,setText]=useState('')
const navigate = useNavigate()
    const sendHandel = async () => {
    
        if (name.length <= 2 || text.length <= 2) {
          alert(" Name should be more then 4 ");
        } else {
          await axios.post("https://6486ea6abeba6297278f7b88.mockapi.io/Name", {
            name,
            text,
            
          }).then(res => {
            localStorage.setItem("name", res.data.name);
            localStorage.setItem("id", res.data.id);
          });
          navigate("/card");
        }
    }
  return (
    <div>
<Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Welcome</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input type="email" placeholder="Name.." onChange={(event) => setName(event.target.value)} />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    // children={<CFaLock color="gray.300" />}
                  />
                 
                 <Input type="email" placeholder="Text.." onChange={(event) => setText(event.target.value)} />
                </InputGroup>
               
              </FormControl>
              <Link to='/card'>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
                onClick={sendHandel}
              >
                Send
              </Button>
              </Link>
            </Stack>
          </form>
        </Box>
      </Stack>
   
    </Flex>
    </div>
  )
}
