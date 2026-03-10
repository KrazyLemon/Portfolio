export default function Link({ href, children, className = "" }) {
    return (
        <a className={"hover:bg-white/20 rounded-xl p-3 hover:border-white/20 border border-white/0 hover:backdrop-blur-xl hover:shadow-lg bg-white/0 " + className} href={href}>
            {children}
        </a>
    );
}   