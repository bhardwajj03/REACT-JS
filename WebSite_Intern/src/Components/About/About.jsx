import React from 'react'
import OverlayImages from '../OverlayImages';
export default function About() {
  return (
      <div id="about" className="py-16 bg-[#DEFCEC]">
        <h3 className='w-[500px] h-[125px] text-7xl top-[1422px] text-orange-400 ml-[600px]'>About US</h3>
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                 
                  <div className="md:7/12 lg:w-6/12">
                      <p className="w-[400px] h-[0.01px] px-20 top-[2px] ml-[750px]  text-gray-600">
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                          accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                          aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                          Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                          Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                      </p>
                      <OverlayImages />
                  </div>
              </div>
          </div>
      </div>
  );
}