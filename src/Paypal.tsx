import { useRef, useState } from "react";

interface PaypalProps {

}

export const Paypal: React.FC<PaypalProps> = ({}) => {
  const [payeeEmailInput, setPayeeEmailInput] = useState<string>('')
  const [payeeIdInput, setPayeeIdInput] = useState<string>('');
  const [paymentAmount, setPaymentAmount] = useState<number>(0.1);

  const payeeEmailInputRef = useRef<HTMLInputElement>(null);
  const payeeIdInputRef = useRef<HTMLInputElement>(null);
  const paymentAmountInputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <p>PAYPAL</p>
      <div>
        <span>
          <p>Payee Email</p>
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
          <p>Payee ID</p>
          <input
            ref={payeeIdInputRef}
            type="text"
            placeholder="Payee ID"
            value={payeeIdInput}
            onChange={e => setPayeeIdInput(e.target.value)}
          />
        </span>
      </div>
      <div>
        <span>
          <p>Payment Amount</p>
          <input
            ref={paymentAmountInputRef}
            type="number"
            step="0.01"
            value={paymentAmount}
            onChange={e => setPaymentAmount(e.target.valueAsNumber)} // might have to truncate
          />
        </span>
      </div>
    </>
  );
}
