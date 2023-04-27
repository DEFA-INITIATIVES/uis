import React from "react";

const Banner = () => {
	return (
		<div>
			<div className="h-[35vh] bg-banner w-[72vw] bg-cover mx-auto rounded-[25px] mt-8">
				<div className="text-[40px] absolute left-[540px] top-[214px] text-white font-extrabold">
					GO
					<span className="ml-4 w-[146.51px] text-white px-4 text-center h-[51px] bg-[#0049F5] rounded-[25px]">
						PRO
					</span>
				</div>
				<div className="text-[40px] my-5 text-white font-extrabold absolute left-[540px] top-[254px]">
					PREMIUM!
				</div>
				<div className="text-[23px] text-white font-medium absolute left-[540px] top-[344px]">
					Millions of happy users <br /> choices
				</div>
			</div>

			<div className="absolute bg-white p-2 rounded-full  w-[277px] h-[265px] top-[228px] right-0 ">
				<img
					className="w-[210px] h-[233px] top-[10px] right-11"
					src="https://res.cloudinary.com/itgenius/image/upload/v1682575432/Saly-41man_gupkog.png"
					alt=""
				/>
				<div className="absolute top-[108px] left-[36px]">
					<img
                         className="w-[30px] h-[30px]"
						src="https://res.cloudinary.com/itgenius/image/upload/v1682575432/Ellipse_67ellipde_jrdmbv.png"
						alt=""
					/>
				</div>
                <div className="absolute top-[138px] right-[76px]">
					<img
                         className="w-[52px] h-[52px]"
						src="https://res.cloudinary.com/itgenius/image/upload/v1682575432/Ellipse_67ellipde_jrdmbv.png"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default Banner;
