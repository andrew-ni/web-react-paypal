import { PaypalCheckoutButton } from './PaypalCheckoutButton';

export interface Product {
  description: string;
  price: number;
}

interface CheckoutProps {}

export const Checkout: React.FC<CheckoutProps> = ({}) => {
  const product = {
    description: 'Product description',
    price: 19,
  };

  return (
    <>
      <p>CHECKOUT COMPONENT</p>
      <div className="paypal-button-container">
        <pre>{JSON.stringify(product)}</pre>
        <PaypalCheckoutButton product={product} />
      </div>
    </>
  );
};
