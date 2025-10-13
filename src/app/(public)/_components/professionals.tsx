<<<<<<< HEAD
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import fotoImg from "../../../../public/foto1.png";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
=======
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import fotoImg from '../../../../public/foto1.png'
import Link from "next/link"
import { ArrowRight } from "lucide-react"

>>>>>>> 6328a0a (att)

export function Professionals() {
  return (
    <section className="bg-gray-50 py-16">
<<<<<<< HEAD
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl text-center mb-12 font-bold">
          Clinicas disponiveis
        </h2>

        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 ">
          <Card className="p-0 overflow-hidden">
=======

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl text-center mb-12 font-bold">
          Clinicas disponíveis
        </h2>

        <section
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >

          <Card className="overflow-hidden">
>>>>>>> 6328a0a (att)
            <CardContent className="p-0">
              <div>
                <div className="relative h-48">
                  <Image
                    src={fotoImg}
<<<<<<< HEAD
                    alt="foto da clinica"
=======
                    alt="Foto da clinica"
>>>>>>> 6328a0a (att)
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
<<<<<<< HEAD
                    <h3 className="font-semibold">Clinica Centro</h3>
                    <p className="text-sm text-gray-500">
                      Rua Pocone, Centro, Várzea Grande - MT
                    </p>
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                </div>
                <Link
                  href="/clinica/123"
                  className="bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center py-2 rounded-md
                               text-sm md:text-base font-medium"
=======
                    <h3 className="font-semibold">
                      Clinica centro
                    </h3>
                    <p className="text-sm text-gray-500">
                      Rua x, centro, Campo Grande - MS
                    </p>
                  </div>

                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                </div>

                <Link
                  href="/clinica/123"
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center py-2 rounded-md text-sm md:text-base font-medium"
>>>>>>> 6328a0a (att)
                >
                  Agendar horário
                  <ArrowRight className="ml-2" />
                </Link>
              </div>
            </CardContent>
          </Card>
<<<<<<< HEAD
        </section>
      </div>
    </section>
  );
}
=======




        </section>


      </div>

    </section>
  )
} 
>>>>>>> 6328a0a (att)
