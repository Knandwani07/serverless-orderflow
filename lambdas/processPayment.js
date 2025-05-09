export const handler = async (event) => {
    console.log("Processing payment for order:", event.orderId);
    // Simulate payment processing
    const paymentSuccessful = Math.random() < 0.9;
    return {
        orderId: event.orderId,
        paymentSuccessful: paymentSuccessful
    };
};