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
                    </select>
                </div>
                <Link href={`/?type=${type}&value=${value}`}>
                    <button type="button" className="btn btn-primary">Compartilhar</button>
                </Link>
            </div>
        </form>
    );
}