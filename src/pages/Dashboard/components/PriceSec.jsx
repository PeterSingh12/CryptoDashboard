import React, { useState } from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import {
  Button,
  Flex,
  HStack,
  Icon,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { useBitcoin } from "../../../hooks/useBitcoin";
import { useBitcoinChart } from "../../../hooks/useBitcoinChart";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// index → days mapping
const tabDays = [0.04, 1, 7, 30]; // 1H, 1D, 1W, 1M

const PriceSec = () => {
  const { price, loading } = useBitcoin();

  // 1 = 1D default
  const [tabIndex, setTabIndex] = useState(1);

  const { prices, loading: chartLoading } = useBitcoinChart(
    tabDays[tabIndex],
    tabIndex
  );


  const chartData = prices.map(([timestamp, price]) => ({
    time: timestamp,
    price,
  }));


  return (
    <CustomCard h="full">
      {/* HEADER */}
      <Flex justify="space-between">
        <Stack>
          <Text fontSize="sm">Current BTC Price</Text>

          <HStack>
            <Text textStyle="h2">
              {price ? `₹ ${price.toLocaleString("en-IN")}` : "Loading..."}

            </Text>
            <HStack color="green.500">
              <Icon as={BsArrowUpRight} />
              <Text fontSize="sm">Live</Text>
            </HStack>
          </HStack>
        </Stack>

        <HStack>
          <Button leftIcon={<Icon as={AiFillPlusCircle} />}>Buy</Button>
          <Button leftIcon={<Icon as={AiFillMinusCircle} />}>Sell</Button>
        </HStack>
      </Flex>

      <Tabs
        index={tabIndex}
        onChange={setTabIndex}
        variant="soft-rounded"
        colorScheme="green"
        mt="6"
      >
        <TabList bg="black.5" p="3px">
          {["1H", "1D", "1W", "1M"].map((tab) => (
            <Tab key={tab} fontSize="sm" _selected={{ bg: "white" }}>
              {tab}
            </Tab>
          ))}
        </TabList>
      </Tabs>

      {chartLoading ? (
        <Text fontSize="sm" mt="4">Loading chart...</Text>
      ) : (
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={chartData} key={tabIndex}>
            <XAxis dataKey="time" hide />

            <Tooltip
              labelFormatter={(ts) =>
                new Date(ts).toLocaleString("en-IN")
              }
              formatter={(value) => [
                `₹ ${Number(value).toLocaleString("en-IN")}`,
                "BTC Price",
              ]}
            />

            <Line
              type="monotone"
              dataKey="price"
              stroke="#38A169"
              dot={false}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      )}

    </CustomCard>
  );
};

export default PriceSec;
