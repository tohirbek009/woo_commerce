import React, {useState} from 'react'
import vector from '../Assets/svg/Vector.svg';
import {Vektor, Nuqta, Rasm, Minus, Plus, Matn, Top, Tex, Title, Rasmtwo, Footer, Yuqori, Num, Past, Narx, Narxi, Number, Nuqtatwo} from './Style';
import nuqta from '../Assets/svg/nuqta1.svg';
import rasm from '../Assets/svg/rasm1.svg'
import rasmtwo from '../Assets/svg/rasm2.svg';
import nuqtatwo from '../Assets/svg/nuqta2.svg';
import Card from './Card'

function Logo() {
    const [count, setCount] = useState(1);
    const Pluss = () =>{
        return setCount(count+1);
    }
    const Minuss = () =>{
        if(count===1){
            setCount(1)
        }else{
            setCount(count-1)
        }
    }
    return (
        <div>
            <Vektor src={vector} />
            <Nuqta src={nuqta}/>
            <Rasm src={rasm}/>
            <Rasmtwo src={rasmtwo}/>
            <Nuqtatwo src={nuqtatwo}/>
            <Matn>
                <Top>Shoes</Top>
                <Tex>Adidas Originals</Tex>
                <Title>Adidas OriginalsOG Sneakers</Title>
                <Footer>
                    <Yuqori>
                        <Num>7</Num>
                        <Num>7.5</Num>
                        <Num>8</Num>
                        <Num>8.5</Num>
                        <Num>9</Num>
                    </Yuqori>
                    <Past>
                        <Narx>$344</Narx>
                        <Narxi>$560</Narxi>
                        <Card />
                        <Number>
                            <Minus onClick={Minuss}>-</Minus>
                            {count}
                            <Plus onClick={Pluss}>+</Plus>
                        </Number>
                    </Past>
                </Footer>
            </Matn>
        </div>
    )
}

export default Logo
