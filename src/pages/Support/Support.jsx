import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import SupportCard from './components/SupportCard'
import ContactCard from './components/ContactCard'
import { IoMdMail } from 'react-icons/io'
import { AiTwotoneMessage } from 'react-icons/ai'
import Infocard from '../Dashboard/components/Infocard'
import { Stack } from '@chakra-ui/react'

const Support = () => {
  return <DashboardLayout>
    <Stack spacing="80px">
      <SupportCard leftComponet={<ContactCard/>} 
    icon={IoMdMail}
    title="Contact Us" 
    text="Have a question or just want to know more? Feel free to reach us." />

    <SupportCard leftComponet={<Infocard 
        inverted={true}
        imgUrl="/grid_bg.svg"
        text="Learn more about our contact options and get in touch with us."
        tagText="Contact"/>} 
      icon={AiTwotoneMessage}
      title="Live Chat" 
      text="Don't have time to wait for the answer? Chat with us now." />
    </Stack>
  </DashboardLayout>

}

export default Support