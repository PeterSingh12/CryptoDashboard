import React from 'react'
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input } from '@chakra-ui/react'
import Sidenav from './Sidenav'


const SideDrawer = ({isOpen, onClose}) => {
  const btnRef = React.useRef()

  return (
    <>
    
    <Drawer
      isOpen={isOpen}
      placement='left'
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        
        <DrawerBody>
          <Sidenav/>
        </DrawerBody>

      
      </DrawerContent>
    </Drawer>
    </>
  )
}


export default SideDrawer