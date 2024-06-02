import {Box,Button,Center,Container,Flex,Input,Spacer,Text} from '@chakra-ui/react'
import { AuthD } from '../ContextApi/Auth'
import { useContext, useState } from 'react'

export default function Login(){
    let {token}=useContext(AuthD)
    console.log(token)
    let [email,setEmail]=useState()
    let [password,setPassword]=useState()

    function handleClick(e){
        e.preventDefault()
        let obj={
            email,
            password
        }
        console.log(obj)
    }

    return (<>  <form onSubmit={handleClick}>
                <Container  h={'81vh'}>
                    <Center h={'81vh'}>
                    <Flex gap={10} w={'500px'} flexDir={'column'}>
                        <Input onChange={(e)=>setEmail(e.target.value)} placeholder='Email' type='text'/>
                        
                        <Input onChange={(e)=>setPassword(e.target.value)} placeholder='Password' type='password'/>
                        <Button type='submit'>Login</Button>

                    </Flex>
                    </Center>
                </Container>
                </form>
    </>)
}