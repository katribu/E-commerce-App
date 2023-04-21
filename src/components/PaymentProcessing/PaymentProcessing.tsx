import "./paymentProcessing.css"
import { useEffect, useState } from "react";

export default function PaymentProcessing () {
    const [isLoading, setIsLoading] = useState(true);
   
    useEffect(() => {
        // Creating a timeout within the useEffect hook
		setTimeout(() => {
			setIsLoading(false);
		}, 3000);
    },[])

    if (isLoading) {
		return <h3> Payment Processing . . . </h3>;
	}

    return (
        <div className="loading-window-container">
            <div>
            <h3 className="success">Payment Successful!</h3>
            </div>
        </div>
    )
}