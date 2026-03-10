export default function Button({ children, href = "", classname = "" }) {
    return (
        <a href={href} className={classname}>
            {children}
        </a>
    );
}