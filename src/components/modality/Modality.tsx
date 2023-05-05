import React from "react";

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
                    <div className="container-online">
                      <div className="photo">
                        <img src="" alt="" />
                      </div>
                      <div className="title">
                        <h3 className="h3">Online</h3>
                        <button>About</button>
                      </div>
                      <div className="list">
                        <ul>
                          <li>lorem</li>
                          <li>lorem</li>
                          <li>lorem</li>
                        </ul>
                      </div>
                    </div>
                    <div className="container-b-learning">
                      <div className="photo">
                        <img src="" alt="" />
                      </div>
                      <div className="title">
                        <h3 className="h3">B-learning</h3>
                        <button>About</button>
                      </div>
                      <div className="list">
                        <ul>
                          <li>lorem</li>
                          <li>lorem</li>
                          <li>lorem</li>
                        </ul>
                      </div>
                    </div>
                    <div className="container-face-to-face">
                      <div className="photo">
                        <img src="" alt="" />
                      </div>
                      <div className="title">
                        <h3 className="h3">Present</h3>
                        <button>About</button>
                      </div>
                      <div className="list">
                        <ul>
                          <li>lorem</li>
                          <li>lorem</li>
                          <li>lorem</li>
                        </ul>
                      </div>
                    </div>
                    <div className="container-plus">
                      <div className="photo">
                        <img src="" alt="" />
                      </div>
                      <div className="title">
                        <h3 className="h3">Plus</h3>
                        <button>About</button>
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
