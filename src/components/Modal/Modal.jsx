

const Modal = ({ isOpen, onClose }) => {

    if(!isOpen) return null;

    return (
        <div>
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
                <div className="bg-white rounded-lg p-6 max-w-sm text-center">
                    <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
                    <p>Your Purchase was successful.</p>
                    <button onClick={onClose} className="mt-4 bg-purple-500 text-white rounded px-4 py-2">Close</button>

                </div>
            </div>
        </div>
    );
};

export default Modal;