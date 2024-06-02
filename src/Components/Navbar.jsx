import {Box,Flex,Spacer,Text,Button} from '@chakra-ui/react'
import { AuthD } from '../ContextApi/Auth'
import { useContext } from 'react'
import { Link, Link as RouterLink, useNavigate } from 'react-router-dom'


export default function Navbar(){
    let {isAuthenticated}=useContext(AuthD)
    let navigate=useNavigate()
    let {email,setEmail,setToken,setIsAuthenticated}=useContext(AuthD)
    let obj=[{
        lable:"Home",
        to:"/home"
    },
    {
        lable:"Login",
        to:"/login"
    },
    {
        lable:"ProductDetails",
        to:"/productdetails"
    }
]

    return (<>
                <Flex  p={'2'} align={'center'} fontWeight={600} fontSize={'20px'} color={'white'} bg={'green.500'}>
                    <Text cursor={'pointer'}>{"Welcome To -> " +email}</Text>
                    <Spacer/>
                    <Flex  gap={'4'} align={'center'}>
                        {isAuthenticated==true ? <Flex>{obj.map((ele,i)=>
                            <Link to={ele.to} key={i}><Text>{ele.lable}</Text></Link>
                        )}</Flex> : <Text>Login</Text>}
                        <Button onClick={()=>{navigate('/login');setEmail(null),setIsAuthenticated(false),setToken(null) }}>Logout</Button>
                    </Flex>
                </Flex>
    </>)
}