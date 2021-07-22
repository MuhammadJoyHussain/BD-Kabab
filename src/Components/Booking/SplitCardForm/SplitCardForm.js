import React, { useMemo, useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";
import './SplitCardForm.css'
import { Link } from "react-router-dom";




const useOptions = () => {

  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize: "16px",
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }),
    []
  );

  return options;
};

const SplitCardForm = ({ handlePayment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement)
    });
    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      setPaymentSuccess(paymentMethod.id);
      setPaymentError(null)
      handlePayment(paymentMethod.id)
    }
  };

  return (
    <div className="payment">
      <form onSubmit={handleSubmit}>
        <div className="row">
          
          <div className="col">
            <div className="form-outline">
              <label className="form-label">Card number</label>
              <CardNumberElement className="form-control"
                options={options}
                onReady={() => {
                }}
                onChange={event => {
                }}
                onBlur={() => {
                }}
                onFocus={() => {
                }}
              />
            </div>
          </div>

          <div className="col">
            <div className="form-outline">
              <label className="form-label">Expiration date</label>
              <CardExpiryElement className="form-control"
                options={options}
                onReady={() => {
                }}
                onChange={event => {
                }}
                onBlur={() => {
                }}
                onFocus={() => {
                }}
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <label className="form-label">CVC</label>
          <CardCvcElement className="form-control"
            options={options}
            onReady={() => {
            }}
            onChange={event => {
            }}
            onBlur={() => {
            }}
            onFocus={() => {
            }}
          />
          <button className="btn btn-outline-success mt-3 me-3" type="submit" disabled={!stripe}>Pay</button>
          or
          <Link className="btn btn-outline-danger mt-3 ms-3" to="/home">Cancel</Link>
        </div>
      </form>
      {
        paymentError && <p style={{ color: "red" }}>{paymentError}</p>
      }
      {
        paymentSuccess && <p style={{ color: "green" }}>Thank You For The Payment</p>
      }
    </div>
  );
};

export default SplitCardForm;
