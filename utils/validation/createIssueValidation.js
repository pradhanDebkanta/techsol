import * as yup from 'yup';

export const createIssueValidation = yup.object().shape({
    // product details

    productName: yup.string().max(60, 'productName should be max 60 characters.')
        .min(3, 'productName should be min 3 characters.').required('productName is required.'),

    productPrice: yup.number().positive('productPrice must be positive').required('productPrice is required.'),

    orderId: yup.string().required('orderId is required.'),

    orderPurchaseFrom: yup.string().required('orderPurchaseFrom is required.'),

    orderDate: yup.date(),

    productSoldBy: yup.string().required('productSoldBy is required.'),

    sellerRegisterAddress: yup.string(),

    // delevery details

    deleveryAgentCompany: yup.string(),
    shippingAddress: yup.string(),
    whoPurchase: yup.string(),

    // issue & concern 
    issue: yup.string().min(6, 'issue should be min 6 characters.').required('issue is required')
})