import AtvCard from "@/components/Card"


const CardData = [
    {
        url: 'https://tse1.mm.bing.net/th/id/OIP.hEXYR_zy45AHV8wi7d3b2wHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        title:'Canoa Quebrada',
        description:'Carregando',
        categoria: 'pacote 1'
    },
    {
        url: 'https://tse1.mm.bing.net/th/id/OIP.ROFRwSXQA9srlSr9_lU_8AHaE9?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        title:'Jeri',
        description:'Carregando',
        categoria: 'pacote 2'
    },
    {
        url: 'https://tse1.mm.bing.net/th/id/OIP.e04C50RQBiq0cKgo8HlbqgHaEl?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        title:'Mundaú-Trairi',
        description:'Carregando',
        categoria: 'pacote 3'
    },
    {
        url: 'https://tse4.mm.bing.net/th/id/OIP.eQJLlPB2lh5Exi1q-_H0OAHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        title:'Flecheiras-Trairi',
        description:'Carregando',
        categoria: 'pacote 4'
    },
    {
        url: 'https://tse4.mm.bing.net/th/id/OIP.eQJLlPB2lh5Exi1q-_H0OAHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        title:'Camocim',
        description:'Carregando',
        categoria: 'pacote 5'
    },
    {
        url: 'https://tse4.mm.bing.net/th/id/OIP.eQJLlPB2lh5Exi1q-_H0OAHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
        title:'Praia do Futuro- Aquiraz',
        description:'Carregando',
        categoria: 'pacote 6'
    },
]



export default function About(){
    return(
        <div>
            <h1> Sobre nós </h1>
            <p> Informações sobre a empresa... 
            </p>

            <button>About<a href="/about"></a></button>
                <div className=" flex flex-wrap gap-5 justify-center my-7"> 
                    {CardData.map((card, index)=>(
                        <AtvCard
                        key={index}
                        url={card.url}
                        title={card.title}
                        description={card.description}
                        categoria={card.categoria}
                        
                        />
                    ))}
                </div>                
        </div>
    )
}
{/* <AtvCard
    title="Conheça as praias do Litoral Cearence"
    description="Carregando"
    url="https://tse1.mm.bing.net/th/id/OIP.hEXYR_zy45AHV8wi7d3b2wHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" */}