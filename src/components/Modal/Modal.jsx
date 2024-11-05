import paymentImg from '../../assets/Group.png'

const Modal = ({ isOpen, onClose }) => {

    if(!isOpen) return null;

    return (
        <div>
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
                <div className="bg-white rounded-lg p-6 max-w-sm text-center">
                    <div>
                    <img className='mx-auto w-1/5' src={paymentImg} alt="" />
                    </div>
                    <h2 className="text-2xl font-bold ">Payment Successfully</h2>
                    <div className='divider'></div>
                    <p className='text-gray-500 text-sm'>Thanks for purchasing.</p>
                    <p className='text-gray-500 text-sm'>Total Cost: $231</p>
                    <button onClick={onClose} className="mt-4 bg-purple-500 text-white rounded px-4 py-2">Close</button>

                </div>
            </div>
        </div>
    );
};

export default Modal;