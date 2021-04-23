import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export type KeyParam = {
    type: string,
    value: string
};

export function Info(props : KeyParam) {
    const copyKeyToClipboard = () => {
        toast.dark("Chave copiada para área de transferência");
        navigator.clipboard.writeText(props.value);
    };

    return (
        <>
            <table className="table table-borderless">
                <tbody>
                    <tr>
                        <td>Tipo</td>
                        <td className="upper">{props.type}</td>
                    </tr>
                    <tr>
                        <td scope="row">Chave</td>
                        <td>{props.value}</td>
                    </tr>
                </tbody>
            </table>

            <button type="button" className="btn btn-success" onClick={copyKeyToClipboard}>Copiar</button>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
}
