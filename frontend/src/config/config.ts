interface EnvConfig {
    paymentApiUrl: string;
  }
  
  const config: EnvConfig = {
    paymentApiUrl: process.env.REACT_APP_PAYMENT_API_URL || 'http://localhost:4000'
  };
  
  export default config;
  