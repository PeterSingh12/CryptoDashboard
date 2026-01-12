import { Button, HStack, Icon, Stack, Tag, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineInfoCircle } from 'react-icons/ai'
import { useBitcoin } from '../../../hooks/useBitcoin';

const PortfolioSec = () => {
  const { price, loading }= useBitcoin();

  const BTC_BALANCE=22.39401000;  //Example. In real app, fetch from backend
  const INR_BALANCE=1300;

  const totalValue = price? BTC_BALANCE * price + INR_BALANCE: 0;

  return (
    <HStack justify="space-between" bg="white" borderRadius="xl" p='6'
    align={{base:"flex-start", xl:"center"}} 
    flexDir={{base:"column", xl:"row"}}
    spacing={{base:4, xl:0}}>
        <HStack spacing={{base:0, xl:16 }} align={{base:"flex-start", xl:"center"}} flexDir={{base:"column", xl:"row"}}>
            <Stack>
            <HStack color="black.80">
                <Text fontSize="sm">Total Portfolio Value </Text>
                <Icon as={AiOutlineInfoCircle}/>
            </HStack>
            <Text textStyle="h2" fontWeight="medium">
              {loading? "Loading...": `₹ ${totalValue.toLocaleString("en-IN")}`}
            </Text> //h2 and fontSize defined in theme index.js
            </Stack>
            <Stack>
            <HStack color="black.80">
                <Text fontSize="sm">Wallet Balances </Text>
                <Icon as={AiOutlineInfoCircle}/>
            </HStack>
            <HStack spacing={4} align={{base:"flex-start", sm:"center"}} 
              flexDir={{base:"column", sm:"row"}}>
              <HStack>
                <Text textStyle="h2" fontWeight="medium">{BTC_BALANCE}</Text> <Tag colorScheme='gray' fontWeight="medium">BTC</Tag>
              </HStack>
              <HStack>
                <Text textStyle="h2" fontWeight="medium">₹ {INR_BALANCE.toLocaleString("en-IN")}</Text> <Tag colorScheme='gray' fontWeight="medium">INR</Tag>
              </HStack>
            </HStack>
            </Stack>
        </HStack>
        <HStack>
            <Button leftIcon={<Icon as={AiOutlineArrowDown}/>}>Deposit</Button>
            <Button leftIcon={<Icon as={AiOutlineArrowUp}/>}>Withdraw</Button>
        </HStack>
    </HStack>
  )
}

export default PortfolioSec