import React from "react";
import { ButtonPrimary } from "../button/ButtonPrimary";
import programming from "../../assets/programacion2.jpg";

const Hero = () => {
  return (
    <>
      <section>
        {/* <div className="hero-container rounded-bl-[100px] bg-[#2D59F8]"> */}
        <div className="hero-container rounded-bl-[100px] bg-gradient-to-t from-blue-700 via-blue-500 to-blue-400">
          <div className="hero-sections mx-14 py-4">
            <div className="pt-40 pb-20">
              <div className="hero-content flex">
                <div className="content text-white w-1/2">
                  <h1 className="text-5xl font-bold mb-6">
                    #EnfocadosEnTuFuturo
                  </h1>
                  <p className="paragraph text-xl font-light mb-6">
                    Acelera tu carrera profesional
                  </p>
                  <p className="paragraph text-xl w-11/12 font-light mb-8">
                    Aprende habilidades en alta demanda: Programación,
                    marketing, diseño, robótica, negocios y más...
                  </p>
                  <div className="button">
                    <ButtonPrimary
                      title={`Soy Estudiante`}
                      link="https://edtecnica.info/"
                      backgroundColor="bg-slate-800"
                      style={"text-white py-2 px-4 rounded-full mr-4"}
                    />
                    <ButtonPrimary
                      title="¡Comienza ahora!"
                      link="#"
                      backgroundColor="bg-blue-400"
                      style={"text-white py-2 px-4 rounded-full mr-4"}
                    />
                  </div>
                </div>
                <div className="image">
                  <img src={programming} alt="" width={120} height={120} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { Hero };
