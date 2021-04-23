import { useState } from "react";
import Link from 'next/link'

export function KeyForm() {
    const [value, setValue] = useState("");
    const [type, setType] = useState("cpf");

    const changeKey = (event) => {
        setValue(event.target.value);
    };

    const changeType = (event) => {
        setType(event.target.value);
    };

    const encode = () => {
        const params = new URLSearchParams();
        params.append("value", value);
        params.append("type", type);
        return "/?" + params.toString();
    };

    return (
        <form>
            <div className="mb-3">
                <label htmlFor="keyValue" className="form-label">Chave</label>
                <input type="text" className="form-control" id="keyValue"
                    aria-describedby="Chave PIX" onChange={changeKey} value={value} />
                <div className="mb-3">
                    <label htmlFor="keyType" className="form-label">Tipo da Chave</label>
                    <select className="form-select" aria-label="Default select example"
                        id="keyType" value={type} onChange={changeType}>
                        <option value="cpf">CPF</option>
                        <option value="cnpj">CNPJ</option>
                        <option value="aleatória">Aleatória</option>
                        <option value="celular">Celular</option>
                        <option value="e-mail">E-Mail</option>
                        <option value="copia e cola">Copia e Cola</option>
                    </select>
                </div>
                <Link href={encode()}>
                    <button type="button" className="btn btn-primary">Compartilhar</button>
                </Link>
            </div>
        </form>
    );
}