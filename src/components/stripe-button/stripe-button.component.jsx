import StripeCheckout from 'react-stripe-checkout';

import './stripe-button.styles.scss';

export default function StripeButton({ price }) {
  const priceForStripe = price * 100;
  const stripePublishAbleKey =
    'pk_test_51ImFfFA58OBXLJ3FhhE1IjgE57hJRjPkE1UDt4GalCz4NtvZsWZAVyRFz6eR04svRRJwVWHuXgeegwij75PslT3J00bBN0nK5F';

  const onToken = (token) => {
    console.log('token', token);
    alert('Payment Successful');
  };
  return (
    <StripeCheckout
      name={'Crwn Clothing Ltd.'}
      label={'Pay Now'}
      billingAddress
      shippingAddress
      description={`Your Total Price is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      image="https://sendeyo.com/up/d/f3eb2117da"
      stripeKey={stripePublishAbleKey}
      token={onToken}
    />
  );
}
