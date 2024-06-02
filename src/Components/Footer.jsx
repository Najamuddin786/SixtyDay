import {Box,Flex,Text} from '@chakra-ui/react'

export default function Footer(){

    return (<>
                <Flex mt={2} fontSize={'18px'} align={'center'} justifyContent={'space-around'} h={'4rem'} color={'white'} bg={'green.900'}>
                    <Text>Copyright 2024</Text>
                    <Text>Footer</Text>
                </Flex>
    </>)
}