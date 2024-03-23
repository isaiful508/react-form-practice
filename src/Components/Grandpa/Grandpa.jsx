import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Granpa.css';

export const AssetContext = createContext('Gold');
export const MoneyContext = createContext(1000)

const Grandpa = () => {
    const asset = 'diamond';
    const [money, setMoney] = useState(1000);
    return (
        <div className="grandpa ">
            <div>
                <h2>Grandpa</h2>
                <p>Net money: {money}</p>
                <MoneyContext.Provider value={[money, setMoney]}>
                    <AssetContext.Provider value="Gold">
                        <div className="flex">

                            <Dad asset={asset}></Dad>
                            <Uncle asset={asset}></Uncle>
                            <Aunty></Aunty>
                        </div>
                    </AssetContext.Provider>

                </MoneyContext.Provider>

            </div>
        </div>
    );
};

export default Grandpa;

/**
 * 1.creat a context and export it 
 * 
 * 2.Add provider with context with a value.value could be anything
 * 3.useContext to access value in the context API
 * 
 */