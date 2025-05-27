export default function  produtcsPage(){
    const produtos =[
        {id:1, nome:"blusa", preco:79},
        {id:2, nome:"vestido", preco:5},
        {id:3, nome:"jaqueta", preco:6}
    ]
    return(
    <div>
        <h1>Produtos</h1>
        {produtos.map((produto)=>{
            return(<li key={produto.id}>{produto.nome}: R$ {produto.preco},0</li>)
        })}
    </div>
    )
}
