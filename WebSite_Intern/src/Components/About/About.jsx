import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-[#DEFCEC;]">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://s3-alpha-sig.figma.com/img/5263/9ad1/8f28b2cc038ef68493515d6035af45da?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YqzJu1Sz~LiFGmd23IsZw8fbV8ZuEVWlC374BNmJykMrTiJngmefKajZu6XUZRNycz~3PkQTeRmKLs3q1z3OTExP219ubhjmaUOXxkyoz1C3MPhaDU679CqvkAasP6lWjYPx6VuZ95ffvmfMJWQ01BkRwxAhMbP3i2s9KcblPUBjRjzEUnJ1Qf2bujB9OEOSuo7pvsBxri2xUismYkiGZbz55gKaiq17m~xcvCRdyVre2mN9PHx~5pefS-lhuHyvNwbyPlClXdZh6SmTyDRHpLv5uWfNswrEIzOY8fOA617fLrruUdGcUxIu6s3oJYSSaXQiN~n91IlN-arfREw-gA__"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <p className="mt-6 text-gray-600">
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                          accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                          aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                      </p>
                      <p className="mt-4 text-gray-600">
                          Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                          Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}