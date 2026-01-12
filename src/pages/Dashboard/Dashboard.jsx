import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import PortfolioSec from './components/PortfolioSec'
import PriceSec from './components/PriceSec'
import { Grid, GridItem } from '@chakra-ui/react'
import Transaction from './components/Transaction'
import Infocard from './components/Infocard'

const Dashboard = () => {
  return <DashboardLayout title="Dashboard">
    <Grid gridTemplateColumns={{base: "repeat(1, 1fr)", xl: "repeat(2, 1fr)"}} gap="6">
      <GridItem colSpan={{
        base: 1,
        xl: 2,
      }}>
        <PortfolioSec />
      </GridItem>
      <GridItem colSpan={1}>
        <PriceSec />
      </GridItem>
      <GridItem colSpan={1}>
        <Transaction/>
      </GridItem>
      <GridItem colSpan={1}>
        <Infocard 
        inverted={false}
        imgUrl="/dot_bg.svg"
        text="Learn more about Crypto-backed loans and start borrowing against your crypto assets today."
        tagText="Loan"/>
      </GridItem>
      <GridItem colSpan={1}>
        <Infocard 
        inverted={true}
        imgUrl="/grid_bg.svg"
        text="Learn more about our contact options and get in touch with us."
        tagText="Contact"/>
      </GridItem>
    </Grid>
  </DashboardLayout>
}

export default Dashboard