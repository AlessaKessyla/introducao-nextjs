import CardDat from "@/components/Card"


export default function About(){
    return(
        <div>
            <h1> Sobre nós </h1>
            <p> Informações sobre a empresa... 
            </p>

            <button>About<a href="/about"></a></button>
            <CardDat
                title="Conheça as praias do Litoral Cearence"
                description="Carregando"
                url="https://tse1.mm.bing.net/th/id/OIP.hEXYR_zy45AHV8wi7d3b2wHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
            />
        </div>
    )
}