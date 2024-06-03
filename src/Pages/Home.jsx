import { Box, Flex, Text ,Image,Button} from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Home() {
    const [data, setData] = useState([])
    const [cat, setCat] = useState()
    const [price, setPrice] = useState()

    useEffect(function() {
        async function getData() {
            try {
                if(cat && price){
                    let res = await axios(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?filter=${cat}&page=1&limit=5&sort=price&order=${price}`)
                    setData(res.data.data)
                }else if(cat){
                    let res = await axios(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?filter=${cat}&page=1&limit=5`)
                    setData(res.data.data)

                }else if(price){
                    let res = await axios(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=1&limit=5&sort=price&order=${price}`)
                    setData(res.data.data)
                }else{

                    let res = await axios('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products')
                    setData(res.data.data)
                }
                // Assuming res.data.data is the array you need
                
            } catch (error) {
                console.error(error)
            }
        }
        getData()
    }, [cat,price])

    return (
        <>
        <Flex m={2} bg={'red.100'} p={1} justifyContent={'space-around'}>
            <Text>Category <select name="" id="" onChange={(e)=>setCat(e.target.value)}>
            <option value="">Select</option>
                <option value="">Man</option>
                <option value="kids">Kids</option>
                <option value="homedecor">Homedecor</option>
                <option value="women">Women</option>
                <option value="men">Men</option>
                </select></Text>
            <Text>Price ₹ <select name="" id="" onChange={(e)=>setPrice(e.target.value)}>
                <option value="">Select</option>
                <option value="asc">Low</option>
                <option value="desc">Hight</option>
                
                
                </select></Text>
        </Flex>
        <Flex wrap="wrap" justify="space-between">
            
            {data.map((ele, i) => (
                <Box bg='green.100' key={i} w={{ base: '100%', md: '48%' }} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} mb={4}>
                    <Image src={ele.image} alt={ele.title} />
                    <Text>Brand: {ele.brand}</Text>
                    <Text>Title: {ele.title}</Text>
                    <Text>Category: {ele.category}</Text>
                    <Text>Price: ₹ {ele.price}</Text>
                    <Button>Add To Card</Button>
                </Box>
            ))}
        </Flex>
        </>
    )
}
