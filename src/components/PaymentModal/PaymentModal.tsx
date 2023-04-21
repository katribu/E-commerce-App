import PaymentProcessing from "../PaymentProcessing/PaymentProcessing";
import "./paymentModal.css"

interface ModalProps {
    show?: boolean;
    submit: () => void;
    cancel: () => void;
    value:string;
    isComplete: boolean;
}

export default function PaymentModal({show,submit,cancel,value, isComplete}:ModalProps){
    if(!show){
        return null
    }
    

    return (
        <div className="modal" onClick={cancel}>
            <div className="modalContent" onClick={(e)=>e.stopPropagation()}>
                
                <div className="modalHeader">
                    <h4 className="modalTitle">
                        Credit Card Information
                    </h4>
                    <div onClick={cancel} className='xModal'> X </div>
                </div>

                <div className="modalBody">
                {!isComplete ?
                    <form>
                    <input 
                    type="text"
                    placeholder="1234567812345678"
                    minLength={16}
                    maxLength={16}
                    required
                    onChange={event => (event.target.value)} 
                    />
                    
                    <input 
                    type="text"
                    placeholder="MM / YY"
                    minLength={5}
                    maxLength={5}
                    required
                    onChange={event => (event.target.value)} 
                    />

                    <input
                    type="text"
                    placeholder="CVC"
                    minLength={3}
                    maxLength={3}
                    required
                    onChange={event => (event.target.value)} 
                    />

                    <input
                    type="string"
                    readOnly
                    value={`$${value}`}
                    />
                    
                    <div className="modalFooter">
                        <button onClick={submit}>Complete Payment</button>
                    </div>
                    </form> :
                <div>
                    <PaymentProcessing />
                </div>}
                </div> 

                
            </div>

        </div>
    )
}