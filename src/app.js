import { useState } from "react";
import Outputs from "./Outputs";

export default function App() {
    const [exp, setExp] = useState('');
    const [res, setRes] = useState('0');
    return <div className="calc">
        <Outputs exp={exp} res={res} />
        <Inputs setExp={setExp} setRes={setRes} exp={exp} res={res} />

    </div>
};

function Inputs({ setExp, setRes, res, exp }) {
    function expHadler(e) {
        const click = e.target.textContent;
        if (click === 'AC') {
            setExp('');
            setRes('0');
        }
        else if (click === 'DEL') {
            setExp(exp => exp.slice(0, -1));
        }
        else if (click === '=') {
            setExp(exp => exp.replaceAll('^', '**'));

        }

        else {
            setExp(exp => exp += click);
        }
    }
    return <div className="inputs" onClick={expHadler}>
        <button>AC</button>
        <button>DEL</button>
        <button>%</button>
        <button>^</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>/</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>*</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>+</button>
        <button>0</button>
        <button>.</button>
        <button>=</button>
        <button>-</button>
    </div>
}
