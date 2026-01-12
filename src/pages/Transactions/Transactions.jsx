import { Button, Card, Flex, HStack, Icon, Input, InputGroup, InputLeftElement, Tab, TabList, TabPanel, TabPanels, Tabs, Tag } from '@chakra-ui/react'
import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { AiOutlineDownload } from 'react-icons/ai'
import TransactionsTable from './components/TransactionsTable'
import { BsSearch } from 'react-icons/bs'


const Transactions = () => {
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposits",
      count: 114,
    },
    {
      name: "Withdrawals",
      count: 55,
    },
    {
      name: "Trades",
      count: 50,
    },
  ]
  return (
    <DashboardLayout title="Transactions">
      <Flex justify="end" mt="6" mb="3">
        <Button leftIcon={<Icon as={AiOutlineDownload} />}>Export CSV</Button>
      </Flex>
      <Card>
        <Tabs>
          <TabList pt="4" display="flex" w="full" justifyContent="space-between">
            <HStack>
              {tabs.map((tab) => (
                <Tab key={tab.name} display="flex" gap="2" pb="4">
                  {tab.name} <Tag colorScheme='gray' borderRadius='full'>{tab.count}</Tag>
                </Tab>
              ))}
            </HStack>

            <InputGroup maxW="200px" pr="6">
              <InputLeftElement pointerEvents="none">
                <Icon as={BsSearch} />
              </InputLeftElement>
              <Input type="tel" placeholder="Search..." />
            </InputGroup>
          </TabList>
          <Flex gap={6}
            justify="space-between"
            align={{
              base: "center",
              xl: "normal"
            }}
            flexDir={{
              base: "column",
              xl: "row",
            }}>
            <TabPanels>
              <TabPanel>
                <TransactionsTable />
              </TabPanel>
              <TabPanel>
                <TransactionsTable />
              </TabPanel>
              <TabPanel>
                <TransactionsTable />
              </TabPanel>
              <TabPanel>
                <TransactionsTable />
              </TabPanel>
            </TabPanels>
          </Flex>
        </Tabs>
      </Card>
    </DashboardLayout >
  )
}

export default Transactions