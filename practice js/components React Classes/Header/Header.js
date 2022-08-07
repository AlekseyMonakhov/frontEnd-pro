import './Header.scss';


export function Header() {
    let name = 'Aleksey Monakhov';
    let userNick = 'len12';
    return (
        <header className="header">
            <h1>{name}</h1>
            <p>{userNick}</p>
        </header>
    );
}