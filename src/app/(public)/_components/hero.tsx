'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import doctorImg from '../../../../public/doctor-hero.png';

export function Hero() {
  const scrollToClinicas = () => {
    const section = document.getElementById("clinicas");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white w-full h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <main className="flex flex-col-reverse lg:flex-row items-center justify-between h-full">

          <article className="w-full lg:w-1/2 h-full flex flex-col justify-center space-y-6 text-center lg:text-left px-2 lg:px-6">
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight tracking-tight">
              Encontre os melhores profissionais em um único local!
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Nós somos uma plataforma para profissionais da saúde com foco em agilizar seu atendimento de forma simplificada e organizada.
            </p>

            <div>
              <Button
                onClick={scrollToClinicas}
                className="bg-cyan-600 hover:bg-cyan-500 px-6 py-3 text-lg font-semibold w-fit mx-auto lg:mx-0"
              >
                Encontre uma clínica.
              </Button>
            </div>
          </article>

          <div className="w-full lg:w-1/2 h-full flex justify-center items-end">
            <Image
              src={doctorImg}
              alt="Foto ilustrativa de um profissional de saúde"
              quality={100}
              priority
              className="object-contain w-[200px] sm:w-[250px] md:w-[350px] lg:w-[500px] xl:w-[650px] 2xl:w-[700px]  max-h-[90vh] "
            />
          </div>
        </main>
      </div>
    </section>
  );
}