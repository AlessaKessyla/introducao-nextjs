
export default function ListaDeCompras() {
    
    const items = [
    { objeto: "computador", comprado: false },
    { objeto: "microfone", comprado: false },
    { objeto: "iphone 13 Pro", comprado: true },
    { objeto: "fone Go", comprado: true },
    ];

        return (
        <div>
        <h1>Lista de Compras</h1>
        <ul>
        {items.map((item, index) => (
        <li
            key={`${item.objeto}-${index}`}  // combina o nome com o índice
            style={{
            textDecoration: item.comprado ? "line-through" : "none",
            }}
        >
            {item.objeto}
        </li>
        ))}
        </ul>
    </div>
    );
}