import { Button } from "@/components/ui/button";
import Image from "next/image";
<<<<<<< HEAD
import doctorImg from "../../../../public/doctor-hero.png";
=======
import doctorImg from '../../../../public/doctor-hero.png'
>>>>>>> 6328a0a (att)

export function Hero() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 pt-20 pb-4 sm:pb-0 sm:px-6 lg:px-8">
<<<<<<< HEAD
        <main className="flex items-center justify-center">
          <article className="flex-[2] max-w-3xl space-y-8 flex flex-col justify-center">
            <h1 className="text-4xl lg:text-4xl font-bold max-w-2xl tracking-tight">
              Encontre os melhores profissionais em um único local!
            </h1>
            <p className="text-base md:text-lg text-gray-600">
              Nós somos uma plataforma para proficionais da saúde com foco em
              agilizar seu atendimento de forma simplificada e organizada.{" "}
=======

        <main className="flex items-center justify-center">
          <article className="flex-[2] max-w-3xl space-y-8 flex flex-col justify-center">
            <h1 className="text-4xl lg:text-5xl font-bold max-w-2xl tracking-tight">
              Encontre os melhores profissionais em um único local!
            </h1>
            <p className="text-base md:text-lg text-gray-600">
              Nós somos uma plataforma para profissionais da saúde com foco em agilizar seu atendimento de forma simplificada e organizada.
>>>>>>> 6328a0a (att)
            </p>

            <Button className="bg-emerald-500 hover:bg-emerald-400 w-fit px-6 font-semibold">
              Encontre uma clinica
            </Button>
          </article>

<<<<<<< HEAD
          <div className="hidden lg:block">
            <Image
              src={doctorImg}
              alt="Foto ilustrativa profissional da saúde"
=======

          <div className="hidden lg:block">
            <Image
              src={doctorImg}
              alt="Foto ilustrativa de um profissional de saude"
>>>>>>> 6328a0a (att)
              width={340}
              height={400}
              className="object-contain"
              quality={100}
              priority
            />
          </div>
        </main>
<<<<<<< HEAD
      </div>
    </section>
  );
}
=======

      </div>
    </section>
  )
}
>>>>>>> 6328a0a (att)
