import getSesion from  '@/lib/getSession'
import { redirect } from 'next/navigation'

export default async function Services(){
 const session = await getSesion()

    if(!session){
        redirect("/")
    }
    
    
    return(
        <section>
            <h1>Página Seriços</h1>
        </section>
    )
}