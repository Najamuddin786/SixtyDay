import { Box, Button, Center, Container, Flex, Input, Text } from '@chakra-ui/react';
import { AuthD } from '../ContextApi/Auth';
import { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    let { token, setIsAuthenticated, setToken,setEmail } = useContext(AuthD);
    let navigate=useNavigate()
    console.log(token);
    let [email, setEmailok] = useState('');
    let [password, setPassword] = useState('');

    async function loginUser(obj) {
        try {
            let res = await axios({
                url: "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/login",
                method: "POST",
                data: obj
            });
            console.log(res.data);
            setToken(res.data)
            setEmail(email)
            setIsAuthenticated(true)
            // Assuming the response contains a token and email, update the context
            setIsAuthenticated(true);
            setToken(res.data.token);
            setEmail(email)
            navigate('/home')
        } catch (error) {
            console.log("error", error);
        }
    }

    async function handleClick(e) {
        e.preventDefault();
        let obj = {
            email,
            password
        };

        await loginUser(obj);
        console.log(obj);
    }

    return (
        <>
            <form onSubmit={handleClick}>
                <Container h={'81vh'}>
                    <Center h={'81vh'}>
                        <Flex gap={10} w={'500px'} flexDir={'column'}>
                            <Input 
                                value={email}
                                onChange={(e) => setEmailok(e.target.value)} 
                                placeholder='Email' 
                                type='text' 
                            />
                            <Input 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                placeholder='Password' 
                                type='password' 
                            />
                            <Button type='submit'>Login</Button>
                        </Flex>
                    </Center>
                </Container>
            </form>
        </>
    );
}
