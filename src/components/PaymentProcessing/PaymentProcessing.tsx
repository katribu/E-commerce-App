import "./paymentProcessing.css"

interface PaymentProcessingProps {
    isComplete?: boolean;
}

export default function PaymentProcessing ({isComplete}:PaymentProcessingProps) {
    return (
        <div className="loading-window-container">
            <div>
            <h2>Payment Processing</h2>
            <p>Payment Successfull!</p>
            </div>
        </div>
    )
}