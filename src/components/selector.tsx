import { KeyForm } from "./form";
import { Info, KeyParam } from "./info";

export function Selector (props: KeyParam) {
    if(props.value && props.type)
        return <Info value={props.value} type={props.type} />;
    return <KeyForm />;
};