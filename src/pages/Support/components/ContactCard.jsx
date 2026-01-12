import { Box, Button, Card, Checkbox, FormControl, FormLabel, HStack, Input, Stack, Text, Textarea } from '@chakra-ui/react'
import React from 'react'

const ContactCard = () => {
    return (
        <Card p={6} borderRadius="1 rem" flexGrow={1}>
            <Stack spacing={6}>
                <Text fontWeight="medium" fontSize="sm">You will receive a response within 24 hours of submission.</Text>

                <HStack flexDir={{
                    base: "column",
                    md: "row",
                }}>
                    <FormControl>
                        <FormLabel>First Name</FormLabel>
                        <Input placeholder='Enter your first name..' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Last Name</FormLabel>
                        <Input placeholder='Enter your last name..' />
                    </FormControl>
                </HStack>
                <FormControl>
                    <FormLabel>Email Address</FormLabel>
                    <Input type="email" placeholder='Enter your email..' />
                </FormControl>
                <FormControl>
                    <FormLabel>Message</FormLabel>
                    <Textarea placeholder='Got anything to say? ' />
                </FormControl>
                <Checkbox defaultChecked>
                    <Text fontSize="xs">
                        I agree with the
                        <Box as="span" color="p.purple" ml={1}>Terms and Conditions</Box>
                    </Text>
                </Checkbox>
                <Stack>
                    <Button fontSize="sm">Send message</Button>
                    <Button fontSize="sm" colorScheme='gray'>Book a meeting</Button>
                </Stack>
            </Stack>
        </Card>
    )
}

export default ContactCard