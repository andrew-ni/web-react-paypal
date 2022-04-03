import { PayPalButtons } from '@paypal/react-paypal-js';
import { useState } from 'react';
import { Product } from './Checkout';

interface PaypalCheckoutButtonProps {
  product: Product;
}

export const PaypalCheckoutButton: React.FC<PaypalCheckoutButtonProps> = props => {
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState<any>(null)
  const { product } = props;

  const handleApprove = (orderId: string) => {
    // call backend server to fulfill order

    // if response is successful
    setPaidFor(true);

    // Refresh user's account or subscription status

    // If the response returns an error
    // setError('Payment processed successfully. However, an error occurred');
  };

  if (paidFor) {
    // Display success message, modal, or redirect user to success page
    alert('Thank you for your purchase');
    setPaidFor(false);
  }

  if (error) {
    // Display error message, modal, or redirect user to error page
    alert(error);
    setError(null);
  }

  return (
    <>
      <p>PAYPAL CHECKOUT COMPONENT</p>
      <PayPalButtons
        style={{
          color: 'silver',
          layout: 'vertical',
          height: 48,
          tagline: false,
          shape: 'pill',
        }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: product.description,
                amount: {
                  value: product.price.toFixed(2),
                },
                payee: {
                  merchant_id: 'PHH9YUA5U8734',
                }
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          const order = await actions.order?.capture();
          console.log('order', order);

          handleApprove(data.orderID);
        }}
        onError={(err) => {
          setError(err);
          console.error(err);
        }}
        onCancel={() => {
          // Display messages or redirect
        }}
        onClick={(data, actions) => {
          // Can prevent user from repurchasing same product or resubscribing
          // Validate on button click; client or server side
          const hasAlreadyBoughtCourse = false;
          if (hasAlreadyBoughtCourse) {
            setError('Already purchased course');
            return actions.reject();
          }
          // Proceed to createOrder
          return actions.resolve();
        }}
      />
    </>
  );
};
