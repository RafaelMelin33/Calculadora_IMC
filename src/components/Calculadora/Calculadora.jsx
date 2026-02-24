import css from './Calculadora.module.css'
import Input from "../Input/Input.jsx"
import Resultado from "../Resultado/Resultado.jsx"
import { useState } from 'react';



export default function Calculadora() {

    const [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0)

    const valorImc = Number(peso) / (Number(altura) / 100 * Number(altura) / 100)
    const imc = valorImc.toFixed(2)

    function pesoAdd(e) {
        if (e.target.value >= 0){
            setPeso(e.target.value)    
        }
    }

    function alturaAdd(e) {
        if (e.target.value >= 0){
            setAltura(e.target.value)
        }
        
    }

    return (
        <div className={"container py-5"}>
            <div className={"row align-items-center " + css.f - altura}>
                <div className={"col"}>
                    <form className={'bg-warning-subtle py-5 rounded-5'}>
                        {imc == 'NaN' || imc <= 0 || imc == 'Infinity' ? <Resultado resultado={'Informe valores validos para ter seu imc'} /> : ''}
                        {imc > 0 && imc <= 18.5 && imc != 'Infinity' ? <Resultado resultado={'Seu imc é: ' + imc + ' abaixo do peso'} /> : ''}
                        {imc > 18.5 && imc < 25 && imc != 'Infinity' ? <Resultado resultado={'Seu imc é: ' + imc + ' normal'} /> : ''}
                        {imc >= 25 && imc < 30 && imc != 'Infinity' ? <Resultado resultado={'Seu imc é: ' + imc + ' sobrepeso'} /> : ''}
                        {imc >= 30 && imc < 35 && imc != 'Infinity' ? <Resultado resultado={'Seu imc é: ' + imc + ' obesidade grau 1'} /> : ''}
                        {imc >= 35 && imc < 40 && imc != 'Infinity' ? <Resultado resultado={'Seu imc é: ' + imc + ' obesidade grau 2'} /> : ''}
                        {imc >= 40 && imc != 'Infinity' ? <Resultado resultado={'Seu imc é: ' + imc + ' obesidade grau 3'} /> : ''}
                        
                        
                        <div className={'form-group py-3 w-75 m-auto'}>
                            <Input htmlFor={'peso'} placeholder={'Digite seu peso em Kg'} tipo={'number'} value={peso} onInput={pesoAdd} textoLabel={'Seu peso é ' + peso + ' Kg'} />
                        </div>
                        <div className={'form-group py-3 w-75 m-auto'}>
                            <Input htmlFor={'altura'} placeholder={'Digite sua altura em Cm'} tipo={'number'} value={altura} onInput={alturaAdd} textoLabel={'Sua altura é ' + altura + ' Cm'} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}