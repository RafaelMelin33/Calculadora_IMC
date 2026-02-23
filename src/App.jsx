import { useState } from 'react';

export default function App() {

    const [peso, setPeso] = useState()
    const [altura, setAltura] = useState()
    const [imc, setImc] = useState(0)

    function pesoAdd(e){
        setPeso(e.target.value)
    }
    
    function alturaAdd(e){
        setAltura(e.target.value)
    }

    function calcularImc(){
        var valorImc = peso/(altura/100*altura/100)
        setImc(valorImc.toFixed(2))
    }

    return(
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col'}>
                    <form className={'bg-light'}>
                        <p className={'text-center'}>Seu IMC é {imc}</p>
                        <div className={'form-group py-3 w-75 m-auto'}>
                            <label htmlFor={'peso'}>Seu peso é {peso}</label>
                            <input className={'form-control'} type="number" name={'peso'} id={'peso'} placeholder={'Digite seu peso em Kg'} value={peso} onInput={pesoAdd}/>
                        </div>
                        <div className={'form-group py-3 w-75 m-auto'}>
                            <label htmlFor={'altura'}>Sua altura é {altura}</label>
                            <input className={'form-control'} type="number" name={'altura'} id={'altura'} placeholder={'Digite sua altura em Cm'} value={altura} onInput={alturaAdd}/>
                        </div>
                        <button className={'btn btn-primary w-75 m-auto d-block'} onClick={calcularImc} type={'button'}>Calcular</button>
                    </form>
                </div>
            </div>
        </div>
    )
}