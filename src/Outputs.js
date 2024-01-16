import themeHandler from './app';

export default function Outputs({ exp, res }) {

    return <div className="outputs">
        <input type="checkbox" className="theme" />
        <h1 className="result">{res}</h1>
        <p>{exp}</p>
    </div>;
}
