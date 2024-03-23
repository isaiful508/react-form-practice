import Cousins from "../Cousins/Cousins";
import { useContext } from 'react';
import { MoneyContext } from "../Grandpa/Grandpa";


const Aunty = () => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cousins name={'Mamshad'}></Cousins>
                <Cousins name={'Runaiya'}></Cousins>
            </section>
            <p>Money: {money}</p>
            <button onClick={() => setMoney(money + 1000)}> Add 1000tk</button>
        </div>
    );
};

export default Aunty;