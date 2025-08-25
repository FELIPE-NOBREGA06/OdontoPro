import { getAllServices } from '../_data-acess/get-all.services'

interface ServicesContentProps {
    userId: string;
}

export async function ServicesContent({ userId }: ServicesContentProps) {
    const services = await getAllServices({ userId: userId })

    return (
        <div>
            Todos os meus services
        </div>
    )
}