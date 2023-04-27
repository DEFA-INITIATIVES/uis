import React from "react";
import Header from "../../components/Header";
import AccountSettings from "../../components/AccountSettings";
import PaymentCard from "./PaymentCard";
import Banner from "./Banner";

function SubcriptionAndPaymentScreen() {
	const cardData = [
		{
			id: 1,
			color: "#181059",
			text1: "Premium",
			text2: "Annual",
		},
		{
			id: 2,
			color: "#BE2117",
			text1: "Pro",
			text2: "Try 1 month",
		},
		{
			id: 3,
			color: "#181059",
			text1: "Base",
			text2: "Quarterly",
		},
	];

	return (
		<div>
			<Header />
			<div className="flex">
				<div>
					<AccountSettings />
				</div>
				<div className="w-[1450px] mt-2 h-[794px] rounded-[25px] shadow-xl bg-white">
					<Banner />
					<div className="text-center mt-[70px] text-xl text-gray-500">
						<p className="text-[16px]">
							We have several powerful plans for you to enjoy more <br />{" "}
							features. Everything you need
						</p>
					</div>
					<div className="flex justify-center mt-10">
						{cardData.map(({ id, color, text1, text2 }) => (
							<PaymentCard
								key={id}
								color={color}
								text1={text1}
								text2={text2}
							/>
						))}
					</div>

					<div className=" mt-10 flex ">
						<button className="bg-[#0049F5] justify-center  items-center mx-auto  h-[54px] rounded-[27px] text-white font-bold w-[315px]">
							Continue
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SubcriptionAndPaymentScreen;
