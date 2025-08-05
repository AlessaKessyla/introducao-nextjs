
'use client'

type FormData = {
    title: string;
    body: string;
    }

type 
export default function CreatePostPage(){
    const 

    return(

        <div>
            <h1 className="text-2xl font-bold mb-4">Criar Novo Post</h1>

            <form>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Título</label>
                    <input className="mt-1 block w-full border border-gray-300 rounded-md 
                    shadow-sm p-2" type="text"
                    name="title"
                    value={''}
                    />
                </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Conteúdo</label>
                        <textarea className="mt-1 border rounded px-3 py-2 w-full"
                        name="content"
                        value={''}
                        rows={5}
                        />
                        </div>
                        
                        <button>Publicar</button>



            </form>

        </div>



    )
}