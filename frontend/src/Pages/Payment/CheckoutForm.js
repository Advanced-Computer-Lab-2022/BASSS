import { useEffect, useState} from 'react';
import axios from 'axios';
import './Payment.css'
import { useStripe,useElements } from '@stripe/react-stripe-js';
import { PaymentElement, CardElement, PaymentMethodMessagingElement} from '@stripe/react-stripe-js';

export default function CheckoutForm(props){
    //props.CourseId , props.Price
    const stripe = useStripe()
    const elements = useElements()
    const [processing, setProcessing] = useState(false)
    const [status, setStatus] = useState('Pay')
    const [error, setError] = useState(null)


    const handleSubmit = async (e) => {
        e.preventDefault()

        if(!stripe || !elements){
            return;
        }

        setProcessing(true);
        setStatus('Processing..')
        try{
            
            const pay = await stripe.confirmPayment({
                elements ,
                confirmParams:{
                    return_url: '/pay',        
                }, 
                redirect: 'if_required'     
            })
        }
        catch(error){
            setError(error.message)
        }
        setStatus('Payment Completed')
        setProcessing(true)
        enroll()
        payInst()



    }

    const payInst = async () =>{
        //call payInst in backend
        await axios.post("http://localhost:9000/individualTrainee/payInst",{amount: props.Price, course: props.CourseId})
        //test course ="637e73821194304d45a2fe5a"
      }
    
      const enroll = async () => {
        //call enroll in backend
        await axios.post("http://localhost:9000/individualTrainee/enroll",{amount: props.Price, course: props.CourseId})
    
      }



    return(
        <div class='checkout_div'>
        <label class='payment_title'>Paying for Course {props.Title} with amount {props.Price}</label>

        <br/>
        <form style={{'padding-top': '10px', 'margin-top': '30px'}} onSubmit={handleSubmit}>
            <PaymentElement/>
            {/* <PaymentMethodMessagingElement/> */}
            <button class="payment_buybtn" type='submit' disabled={processing}> {status} </button> {/*currency*/}

        </form>
        </div>
    )


}