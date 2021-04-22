export type KeyParam = {
    type: string,
    value: string
};

export function Info(props : KeyParam) {
    const copyKeyToClipboard = () => {
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
        </>
    );
}
