import React from "react";
import student from "../../assets/student.jpg";
import company from "../../assets/company.jpg";
import freelance from "../../assets/freelance.jpg";
import professional from "../../assets/professional.jpg";

const ProfileSection = () => {
  return (
    <>
      <section className="mt-20">
        <div className="max-w-full mx-auto">
          <div className="rounded-tl-[100px] bg-gradient-to-t from-slate-50 via-slate-100 to-slate-200">
            <div className="mx-14 px-6">
              <div className="pt-20 pb-20">
                <div className="mx-auto relative text-left text-slate-800">
                  <div className="mb-20 max-w-2xl">
                    <h2 className="text-5xl font-bold mb-4">
                      ¿Para quién es EDTécnica?
                    </h2>
                    <p className="text-lg font-light mb-8">
                      Miles de estudiantes, profesionales y emprendedores se han
                      preparado con nuestros cursos y mejoraron sus ingresos,
                      consiguieron su primer trabajo o crearon su propio
                      negocio. ¡Sigues tú!
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                    <div className="flex h-1/2">
                      <article className="grid grid-cols-2 grid-rows-1 h-full">
                        <div className="">
                          <img
                            className="h-full w-full object-cover"
                            src={student}
                            alt=""
                          />
                        </div>
                        <div className="content p-6">
                          <h3>Students</h3>
                          <p>
                            Quienes al egresar de bachillerato quieren realizar
                            una carrera técnica corta que les permita insertarse
                            en el mercado laboral de la manera más rápida y
                            mejores pagadas.
                          </p>
                        </div>
                      </article>
                    </div>
                    <div className="flex h-1/2">
                      <article className="grid grid-cols-2 grid-rows-1 h-full">
                        <div className="">
                          <img
                            className="h-full w-full object-cover"
                            src={company}
                            alt=""
                          />
                        </div>
                        <div className="content p-6">
                          <h3>Students</h3>
                          <p>
                            Quienes al egresar de bachillerato quieren realizar
                            una carrera técnica corta que les permita insertarse
                            en el mercado laboral de la manera más rápida y
                            mejores pagadas.
                          </p>
                        </div>
                      </article>
                    </div>
                    <div className="flex h-1/2">
                      <article className="grid grid-cols-2 grid-rows-1 h-full">
                        <div className="">
                          <img
                            className="h-full w-full object-cover"
                            src={professional}
                            alt=""
                          />
                        </div>
                        <div className="content p-6">
                          <h3>Students</h3>
                          <p>
                            Quienes al egresar de bachillerato quieren realizar
                            una carrera técnica corta que les permita insertarse
                            en el mercado laboral de la manera más rápida y
                            mejores pagadas.
                          </p>
                        </div>
                      </article>
                    </div>
                    <div className="flex h-1/2">
                      <article className="grid grid-cols-2 grid-rows-1 h-full">
                        <div className="">
                          <img
                            className="h-full w-full object-cover"
                            src={freelance}
                            alt=""
                          />
                        </div>
                        <div className="content p-6">
                          <h3>Students</h3>
                          <p>
                            Quienes al egresar de bachillerato quieren realizar
                            una carrera técnica corta que les permita insertarse
                            en el mercado laboral de la manera más rápida y
                            mejores pagadas.
                          </p>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { ProfileSection };
