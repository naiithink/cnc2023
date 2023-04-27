export default function Footer() {
    return (
        <footer className="bg-stone-900">
            <div className="container text-white py-4 mx-auto text-center">
                Copyright &copy; 2023 naiithink<br />
                hello from { new Date().getFullYear() }!
            </div>
        </footer>
    );
}
