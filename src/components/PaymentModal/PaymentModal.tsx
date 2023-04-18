import "./paymentModal.css"

interface ModalProps {
    show?: boolean;
    onClose: () => void;
    cancel: () => void;
}

export default function PaymentModal({show,onClose,cancel}:ModalProps){
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
                    <input 
                    type="text"
                    placeholder="1234 1234 1234 1234"
                    onChange={event => (event.target.value)} 
                    />
                    
                    <input 
                    type="text"
                    placeholder="MM / YY"
                    onChange={event => (event.target.value)} 
                    />

                    <input
                    type="number"
                    placeholder="CVC"
                    onChange={event => (event.target.value)} 
                    />

                    <input
                    type="number"
                    placeholder="Total"
                    onChange={event => (event.target.value)} 
                    />
                    
                </div>

                <div className="modalFooter">
                    <button onClick={onClose}>Complete Payment</button>
                </div>

            </div>

        </div>
    )
}