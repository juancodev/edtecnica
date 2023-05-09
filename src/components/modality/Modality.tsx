import React from "react";
import { ButtonPrimary } from "../button/ButtonPrimary";
import marketing from "../../assets/marketing_digital.jpg";
import programming from "../../assets/programacion.jpg";
import design from "../../assets/diseño_grafico.jpg";
import photograph from "../../assets/fotografia_edicion_video2.jpg";

const Modality = () => {
  return (
    <>
      <section>
        <div className="max-w-7xl mx-auto relative">
          <div className="rounded-tr-[100px] bg-gradient-to-b from-blue-700 via-blue-600 to-blue-500">
            <div className="mx-14 px-6">
              <div className="pt-20 pb-20">
                <div className="mx-auto relative text-left text-white">
                  <div className="mb-20 max-w-2xl">
                    <h2 className="text-5xl font-bold mb-4">
                      How is studying in EDTecnica?
                    </h2>
                    <p className="text-xl font-light mb-8">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Magni, ipsam animi harum incidunt quod nisi.
                    </p>
                  </div>
                  <div className="grid grid-cols-4 gap-6">
                    <div className="container-online h-full flex flex-col px-6 py-5 bg-slate-50/20 rounded-br-[100px]">
                      <div className="photo mb-4">
                        <img
                          className="w-full rounded-lg h-[140px]"
                          src={marketing}
                          alt=""
                        />
                      </div>
                      <div className="title mb-5 flex flex-col">
                        <h3 className="h3 font-bold text-center text-2xl mb-4">
                          Online
                        </h3>
                        <ButtonPrimary
                          title="¡Conocer más!"
                          link="#"
                          backgroundColor="bg-blue-700"
                          style={"text-white py-2 px-4 rounded-full"}
                        />
                      </div>
                      <div className="list">
                        <ul>
                          <li>lorem</li>
                          <li>lorem</li>
                          <li>lorem</li>
                        </ul>
                      </div>
                    </div>
                    <div className="container-b-learning h-full flex flex-col px-6 py-5 bg-slate-50/20 rounded-br-[100px]">
                      <div className="photo mb-4">
                        <img
                          className="w-full rounded-lg h-[140px]"
                          src={programming}
                          alt=""
                        />
                      </div>
                      <div className="title mb-5 flex flex-col">
                        <h3 className="h3 font-bold text-center text-2xl mb-4">
                          B-learning
                        </h3>
                        <ButtonPrimary
                          title="¡Conocer más!"
                          link="#"
                          backgroundColor="bg-blue-700"
                          style={"text-white py-2 px-4 rounded-full"}
                        />
                      </div>
                      <div className="list">
                        <ul>
                          <li>lorem</li>
                          <li>lorem</li>
                          <li>lorem</li>
                        </ul>
                      </div>
                    </div>
                    <div className="container-face-to-face h-full flex flex-col px-6 py-5 bg-slate-50/20 rounded-br-[100px]">
                      <div className="photo mb-4">
                        <img
                          className="w-full rounded-lg h-[140px]"
                          src={design}
                          alt=""
                        />
                      </div>
                      <div className="title mb-5 flex flex-col">
                        <h3 className="h3 font-bold text-center text-2xl mb-4">
                          Present
                        </h3>
                        <ButtonPrimary
                          title="¡Conocer más!"
                          link="#"
                          backgroundColor="bg-blue-700"
                          style={"text-white py-2 px-4 rounded-full"}
                        />
                      </div>
                      <div className="list">
                        <ul>
                          <li>lorem</li>
                          <li>lorem</li>
                          <li>lorem</li>
                        </ul>
                      </div>
                    </div>
                    <div className="container-plus h-full flex flex-col px-6 py-5 bg-slate-50/20 rounded-br-[100px]">
                      <div className="photo mb-4">
                        <img
                          className="w-full rounded-lg h-[140px]"
                          src={photograph}
                          alt=""
                        />
                      </div>
                      <div className="title mb-5 flex flex-col">
                        <h3 className="h3 font-bold text-center text-2xl mb-4">
                          Plus
                        </h3>
                        <ButtonPrimary
                          title="¡Conocer más!"
                          link="#"
                          backgroundColor="bg-blue-700"
                          style={"text-white py-2 px-4 rounded-full"}
                        />
                      </div>
                      <div className="list">
                        <ul>
                          <li>lorem</li>
                          <li>lorem</li>
                          <li>lorem</li>
                        </ul>
                      </div>
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

export { Modality };
