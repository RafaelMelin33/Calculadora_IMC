export default function Input({htmlFor, placeholder, tipo, value, onInput, textoLabel}){
    return(
        <>
            <label htmlFor={htmlFor}>{textoLabel}</label>
            <input className={'form-control'} type={tipo} name={htmlFor} id={htmlFor} placeholder={placeholder} value={value} onChange={onInput}/>
        </>
    )
}