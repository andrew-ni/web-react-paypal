import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { useRef, useState } from 'react';
interface PaypalProps {}

// const initialOptions: ReactPayPalScriptOptions = {
//   'client-id': 'AbZEz7Y2Qd7pxBNKvIVMSXr4GYHBGwR60sAriXFCN4jqzyNHS3KsOsNCOpzR9vMqZfvxBKK-jw3aTkWa',
//   currency: 'USD',
//   intent: 'capture',
//   'data-client-token': 'abc123xyz==',
//   'data-react-paypal-script-id': 'scriptid',
// };

export const Paypal: React.FC<PaypalProps> = ({}) => {
  const [payeeEmailInput, setPayeeEmailInput] = useState<string>('');
  const [payeeIdInput, setPayeeIdInput] = useState<string>('');
  const [paymentAmount, setPaymentAmount] = useState<number>(0.1);

  const payeeEmailInputRef = useRef<HTMLInputElement>(null);
  const payeeIdInputRef = useRef<HTMLInputElement>(null);
  const paymentAmountInputRef = useRef<HTMLInputElement>(null);

  const createOrder = (data: any, actions: any) => {
    return actions.order.create({
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            value: '2',
          },
          payee: {
            merchant_id: 'K52YS7NC5Q9A8',
          },
        },
      ],
    });
  };
  const onApprove = (data: any, actions: any) => {
    console.log(data);
    return actions.order.capture().then((details: any) => {
      const name = details.payer.name.given_name;
      alert(`Transaction completed by ${name}`);
    });
  };

  return (
    <>
      <p>PAYPAL</p>
      <div>
        <span>
          Payee Email
          <input
            ref={payeeEmailInputRef}
            type="text"
            placeholder="Payee email"
            value={payeeEmailInput}
            onChange={e => setPayeeEmailInput(e.target.value)}
          />
        </span>
      </div>
      <div>
        <span>
          Payee ID
          <input
            ref={payeeIdInputRef}
            type="text"
            placeholder="Payee ID"
            value={payeeIdInput}
            onChange={e => setPayeeIdInput(e.target.value)}
          />
          {payeeIdInput}
        </span>
      </div>
      <div>
        <span>
          Payment Amount
          <input
            ref={paymentAmountInputRef}
            type="number"
            step="0.01"
            value={paymentAmount}
            onChange={e => setPaymentAmount(e.target.valueAsNumber)} // might have to truncate
          />
        </span>
      </div>
      <PayPalScriptProvider
        options={{ 'client-id': 'AbZEz7Y2Qd7pxBNKvIVMSXr4GYHBGwR60sAriXFCN4jqzyNHS3KsOsNCOpzR9vMqZfvxBKK-jw3aTkWa' }}
      >
        <PayPalButtons
          style={{ layout: 'horizontal' }}
          createOrder={createOrder}
          onApprove={onApprove}
        />
      </PayPalScriptProvider>
    </>
  );
};
