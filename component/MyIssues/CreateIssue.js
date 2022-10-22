import React from 'react';
import {
    Box, SimpleGrid, Text, Stack, FormControl, FormLabel, Input, Textarea, Flex, Button
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { createIssueValidation } from '../../utils/validation/createIssueValidation';


const CreateIssue = () => {

    const formik = useFormik({
        initialValues: {
            productName: '',
            productPrice: '',
            orderId: '',
            orderPurchaseFrom: '',
            orderDate: '',
            productSoldBy: '',
            sellerRegisterAddress: '',
            deleveryAgentCompany: '',
            shippingAddress: '',
            whoPurchase: '',
            issue: '',
        },
        onSubmit: (value) => {
            console.log(value, 'formik');
        },
        validationSchema: createIssueValidation,
    });


    return (
        <Box pb={'70px'}>
            <form onSubmit={formik.handleSubmit}>
                <Box mt={'20px'}>
                    <Text mb={'14px'} fontSize={'18px'} color={'var(--chakra-colors-twitter-500)'}>Product details</Text>
                    <SimpleGrid minChildWidth={{ base: '290px', md: '320px' }} spacingX='20px' spacingY='20px'>
                        <Stack>
                            <FormControl id="product_name" isRequired>
                                <FormLabel>Product Name</FormLabel>
                                <Input
                                    placeholder="Samsung Galaxy S20"
                                    _placeholder={{ color: 'gray.500' }}
                                    type='text'
                                    name='productName'
                                    value={formik.values.productName}
                                    onChange={formik.handleChange}
                                />
                            </FormControl>
                            {/* <p></p> */}
                        </Stack>
                        <Stack>
                            <FormControl id="product_price" isRequired>
                                <FormLabel>Product Price</FormLabel>
                                <Input
                                    placeholder="25000"
                                    _placeholder={{ color: 'gray.500' }}
                                    type='number'
                                    name='productPrice'
                                    value={formik.values.productPrice}
                                    onChange={formik.handleChange}
                                />
                            </FormControl>
                            {/* <p></p> */}
                        </Stack>
                        <Stack>
                            <FormControl id="orderId" isRequired>
                                <FormLabel>Order Id</FormLabel>
                                <Input
                                    placeholder=""
                                    _placeholder={{ color: 'gray.500' }}
                                    type='text'
                                    name='orderId'
                                    value={formik.values.orderId}
                                    onChange={formik.handleChange}
                                />
                            </FormControl>
                            {/* <p></p> */}
                        </Stack>
                        <Stack>
                            <FormControl id="orderPurchaseFrom" isRequired>
                                <FormLabel>Order purchase from</FormLabel>
                                <Input
                                    placeholder=""
                                    _placeholder={{ color: 'gray.500' }}
                                    type='text'
                                    name='orderPurchaseFrom'
                                    value={formik.values.orderPurchaseFrom}
                                    onChange={formik.handleChange}
                                />
                            </FormControl>
                            {/* <p></p> */}
                        </Stack>
                        <Stack>
                            <FormControl id="orderDate">
                                <FormLabel>Order date</FormLabel>
                                <Input
                                    placeholder=""
                                    _placeholder={{ color: 'gray.500' }}
                                    type='text'
                                    name='orderDate'
                                    value={formik.values.orderDate}
                                    onChange={formik.handleChange}
                                />
                            </FormControl>
                            {/* <p></p> */}
                        </Stack>
                        <Stack>
                            <FormControl id="productSoldBy" isRequired>
                                <FormLabel>Product Sold By</FormLabel>
                                <Input
                                    placeholder=""
                                    _placeholder={{ color: 'gray.500' }}
                                    type='text'
                                    name='productSoldBy'
                                    value={formik.values.productSoldBy}
                                    onChange={formik.handleChange}
                                />
                            </FormControl>
                            {/* <p></p> */}
                        </Stack>
                        <Stack>
                            <FormControl id="sellerRegisterAddress" >
                                <FormLabel>Seller Register Address</FormLabel>
                                <Input
                                    placeholder=""
                                    _placeholder={{ color: 'gray.500' }}
                                    type='text'
                                    name='sellerRegisterAddress'
                                    value={formik.values.sellerRegisterAddress}
                                    onChange={formik.handleChange}
                                />
                            </FormControl>
                            {/* <p></p> */}
                        </Stack>

                    </SimpleGrid>
                </Box>
                <Box mt={'20px'}>
                    <Text mb={'14px'} fontSize={'18px'} color={'var(--chakra-colors-twitter-500)'}>Delevery details</Text>
                    <SimpleGrid minChildWidth={{ base: '290px', md: '320px' }} spacingX='20px' spacingY='20px'>
                        <Stack>
                            <FormControl id="deleveryAgentCompany" >
                                <FormLabel>Delevery Agent Company</FormLabel>
                                <Input
                                    placeholder="Ekart delevery"
                                    _placeholder={{ color: 'gray.500' }}
                                    type='text'
                                    name='deleveryAgentCompany'
                                    value={formik.values.deleveryAgentCompany}
                                    onChange={formik.handleChange}
                                />
                            </FormControl>
                            {/* <p></p> */}
                        </Stack>
                        <Stack>
                            <FormControl id="shippingAddress" >
                                <FormLabel>Shipping Address</FormLabel>
                                <Input
                                    placeholder=""
                                    _placeholder={{ color: 'gray.500' }}
                                    type='text'
                                    name='shippingAddress'
                                    value={formik.values.shippingAddress}
                                    onChange={formik.handleChange}
                                />
                            </FormControl>
                            {/* <p></p> */}
                        </Stack>
                        <Stack>
                            <FormControl id="whoPurchase" >
                                <FormLabel>Who Purchase</FormLabel>
                                <Input
                                    placeholder=""
                                    _placeholder={{ color: 'gray.500' }}
                                    type='text'
                                    name='whoPurchase'
                                    value={formik.values.whoPurchase}
                                    onChange={formik.handleChange}
                                />
                            </FormControl>
                            {/* <p></p> */}
                        </Stack>
                    </SimpleGrid>
                </Box>
                <Box mt={'20px'}>
                    <Text mb={'14px'} fontSize={'18px'} color={'var(--chakra-colors-twitter-500)'}>Issues</Text>
                    <SimpleGrid minChildWidth={{ base: '290px', md: '320px' }} spacingX='20px' spacingY='20px'>
                        <Stack>
                            <FormControl id="issue" isRequired>
                                <FormLabel>Facing Issue</FormLabel>
                                <Textarea
                                    value={formik.values.issue}
                                    onChange={formik.handleChange}
                                    placeholder='Here is a sample placeholder'
                                    size='sm'

                                />
                            </FormControl>
                            {/* <p></p> */}
                        </Stack>
                    </SimpleGrid>
                </Box>
                <Flex justify={'space-around'} mt={'20px'}>
                    <Box>
                        <Button
                            onClick={() => {
                                formik.resetForm();
                            }}
                            colorScheme='yellow'
                        >
                            Reset Form
                        </Button>
                    </Box>
                    <Box>
                        <Button type='submit' colorScheme='twitter'>Create Issue</Button>

                    </Box>

                </Flex>
            </form>
        </Box>
    )
}

export default CreateIssue