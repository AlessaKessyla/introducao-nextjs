import Image from "next/image";

interface NavBarProps{
    links: {
      label: string
      href: string
    }[]
}

export default function NavBar({links}:NavBarProps) {

  return (
    <div className="">
      <nav className="bg-amber-50 shadow-sm"> 
        <div className="px-4">
          <div className="flex justify-between h-16  items-center">
             {/* LOGO */}
            <div className="flex items-center">
              <Image
                src="/NEXT.JS IMAGEM.png"
                alt="logo nextjs"
                width={40}
                height={40}
              />  
              <span className="ml-2">Next App</span>
            </div>
                 {/* LINKS */}
            <div className=" flex space-x-6"> 
              { 
              links.map((link, indice)=>(
                <a key={indice}
                href={link.href} 
                className="text-lg font-medium hover:text-indigo-600">
                  {link.label}
                </a>
              ))
                }
            </div>

          </div>
        </div>
      </nav>
    </div>
  )
}
    // const links = [
    // { nome: "Início", href:"/" },
    // { nome: "Recursos", href:"/projetos" },
    // { nome: "Contatos", href:"/contato" }
    // ];

    // return (
    // <div NavBar links ={links}>
    //   {/* Resto da página */}
    // </div>
    // );