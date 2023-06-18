
import {useEffect,useState}from "react";
import { Box, Flex, Link, chakra ,Image} from "@chakra-ui/react";
import axios from 'axios';
export default function Card() {
  const [Data, setData] = useState([]);
  const [name , setName]=useState("")
  const [text,setText]=useState('')
  const id = localStorage.getItem('id')

useEffect(()=>{
axios.get("https://6486ea6abeba6297278f7b88.mockapi.io/Name").then(res=>{
const name= res.data.find(element => element.id === id)
     console.log(name);
       setData(name)
})
},[])
  return (
    <div>
 <Flex
      bg="#edf3f8"
      backgroundImage='https://i.pinimg.com/474x/a3/03/d3/a303d36787997f15c87736b33eca62a8.jpg'
      _dark={{ bg: "#3e3e3e" }}
      p={50}
      w="full"
      h='full'
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg="white"
        _dark={{ bg: "gray.800" }}
        mx={{ lg: 8 }}
        display={{ lg: "flex" }}
        maxW={{ lg: "5xl" }}
        shadow={{ lg: "lg" }}
        rounded={{ lg: "lg" }}
      >
        <Box w={{ lg: "50%" }}>
         
            <Image boxSize='400px' src='https://i.pinimg.com/564x/82/2e/89/822e89a19ebe75c8747f291e3f36eedf.jpg' alt='Dan Abramov' />

        </Box>

        <Box py={12} px={6} maxW={{ base: "xl", lg: "5xl" }} w={{ lg: "50%" }}>
          <chakra.h2
            fontSize={{ base: "2xl", md: "3xl" }}
            color="gray.800"
            _dark={{ color: "white" }}
            fontWeight="bold"
          >
          {" "}
            <chakra.span color="brand.600" _dark={{ color: "brand.400" }}>
            {Data.name}
            </chakra.span>
          </chakra.h2>
          <chakra.p mt={4} color="gray.600" _dark={{ color: "gray.400" }}>
          {Data.text}
          </chakra.p>

          <Box mt={8}>
            {/* <Link
              bg="gray.900"
            
              color="gray.100"
              px={5}
              py={3}
              fontWeight="semibold"
              rounded="lg"
              _hover={{ bg: "gray.800" }}
            >
              Start Now
            </Link> */}
          </Box>
        </Box>
      </Box>
    </Flex>
    </div>
  )
}
