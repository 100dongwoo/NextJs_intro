import NavBar from '../components/NavBar';

export default function Home() {
    return (
        <div>
            <NavBar />
            <style jsx>{`
                nav {
                    background-color: tomato;
                }
                a {
                    text-decoration: blue;
                }
            `}</style>
            <h1 className={'active'}>Hello</h1>
        </div>
    );
}
