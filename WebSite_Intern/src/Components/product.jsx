import React from "react";
export default function Product(){
    return (
        <>
        <div id="Product" className="py-16 bg-orange-100">
        <h2 className="text-4xl font-bold text-center text-orange-600">Featured Products</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 mx-auto w-10/12">
          <div className="p-4">
            <img src="https://s3-alpha-sig.figma.com/img/ffe5/e612/c6375a5fe79c6312e286e6003dcfeab2?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OVVmv9pNjqobNpBzXO9UFGYZqwixCG5x9Er4u7GsxHCTf4lT92at-3eUhCAiqsSTWEpEO1yzlVDarAVd3DRodCC0ulFUCHnlPCiT6-gWl51tkMAY2FczznVBSBsRcD-sU-N8gMWefu0jD9P1Oe9bQqzhUdz~CwN1CZI2F253FPrEQsjEAaEuR8D4rJCN0CPdc6tpsUSSpbGS4R6VL52f6ucgD5eD5eA5Fe~gPltMRj6wkX1grx092Ojs5Az0~18~SgBN8Sn6cDDqDvnffcUsHfw0ewRjOd7sWv4a70rH43iGDzZL3VS~npKvza6wZ1jNKosCKYLL7~VAPdndK958yg__"
             alt="Product 1" className="w-full h-full object-cover rounded" />
          </div>
          <div className="p-4">
            <img src="https://s3-alpha-sig.figma.com/img/c4ae/d7e4/62b719774bca03bcf172c3835bf30341?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=El7UkIC1~1Ym6EGCfwaAD8nsqUdTq8pyeZogqhMTRVlfO2jOTehhi6wRgoHR43E4zHDridY86R37x5fYcFjN0txyFHAPG8o9Hrk84c7Tyl9ogT4hAUJ3VSPI7jXe-~bJwPXZI1ifjd3Imblzw305AtR6fQISTujCxO9DG39eaqo7uhRudS11JM0UDi2p1jYYvOWF1QUJTsE7-XELSYqgBptvt-rFS61qHnT0VC87b84qv~V4u-K74te5AYRhOydyXPhikqxSC8k-l2wRaw2rGfOyzD0biJ1WRcLMz~Wy314waobqzNstXoT4ZVC7bvVfZd61b02v9-BK1gj7k2IgMQ__"
             alt="Product 2" className="w-full h-full object-cover rounded" />
          </div>
          <div className="p-4">
            <img src="https://t4.ftcdn.net/jpg/05/37/04/61/360_F_537046123_s8JVn2NrClPQDOryhSm8jonYZPfIzPRX.jpg"
             alt="Product 3" className="w-full h-full object-cover rounded" />
          </div>
        </div>
      </div>

        </>
    )
}