import { Box, Icon, HStack, Stack, Text, Heading } from '@chakra-ui/react'
import React from 'react'
import { RxDashboard } from 'react-icons/rx'
import { BsArrowDownUp } from 'react-icons/bs'
import { BiSupport } from 'react-icons/bi'
import { Link, useLocation } from 'react-router-dom'

const Sidenav = () => {
  const location=useLocation();

  const isActiveLink=(link)=>{
    return location.pathname===link;
  };

  const navLinks = [
    {
      icon: RxDashboard,
      text: 'Dashboard',
      link: '/',
    },
    {
      icon: BsArrowDownUp,
      text: 'Transactions',
      link: '/transactions',
    },
  ]
  return (
    <Stack bg="white" justifyContent="space-between" boxShadow={{base: "none", lg: "lg"}} w={{base:"full", lg:"16rem"}} h="100vh">
      <Box>
      <Heading textAlign="center" fontSize="20px" as="h1" pt="56px">@CryptoTracker</Heading>
      <Box mt="6" mx="3">
        {navLinks.map((nav) => (
          <Link to={nav.link} key={nav.text}>
          <HStack 
          borderRadius="10px" 
          py="3" px="4"
          bg={isActiveLink(nav.link)?"#F3F3F7":"transparent"}
          color={isActiveLink(nav.link)?"#171717":"#797E82"}
          _hover={{ bg: "#F3F3F7",
            color: "#171717"
          }}
          >
            <Icon as={nav.icon} />
            <Text fontSize="14px" fontWeight="700">{nav.text}</Text>
          </HStack>
          </Link>
        ))}
      </Box>
      </Box>

      <Box mt="6" mx="3" mb="6">
      <Link to="/support">
      <HStack
          borderRadius="10px" 
          py="3" px="4"
          bg={isActiveLink("/support")?"#F3F3F7":"transparent"}
          color={isActiveLink("/support")?"#171717":"#797E82"}
          _hover={{ bg: "#F3F3F7",
            color: "#171717"
          }}
          >
            <Icon as={BiSupport} />
            <Text fontSize="14px" fontWeight="medium">Support</Text>
      </HStack>
      </Link>
      </Box>
        
    </Stack>
  )
}

export default Sidenav