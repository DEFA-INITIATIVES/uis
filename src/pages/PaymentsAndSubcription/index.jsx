import React from "react";
import Header from "../../components/Header";
import AccoutSetting from "../../components/AccountSettings";

function SubcriptionAndPaymentScreen() {
	return (
		<div>
			<Header />
			<div className="flex">
				<div>
					<AccoutSetting />
				</div>

				<div>
					<div className="h-[35vh] bg-gray-700/50 w-[75vw] rounded-[25px] mt-8">
						<div className=" text-[30px] absolute left-[474px] top-[214px] text-white font-extrabold ">
							GO
							<span className="ml-4 w-[146.51px] text-white px-4 text-center  h-[51px] bg-[#0049F5] rounded-[25px]">
								PRO
							</span>
						</div>
						<div className=" text-[30px] my-5 text-white font-extrabold absolute left-[474px] top-[254px]">
							PREMIUM
						</div>
						<div className="text-[20px] text-white  font-medium absolute left-[474px] top-[324px]">
							Millions of happy users <br /> choices
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SubcriptionAndPaymentScreen;
