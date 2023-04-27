import React from "react";

const PaymentCard = ({ color, text1, text2 }) => {
	return (
		<div className="mx-4">
			<div
				className={`h-[155px] w-[279px] space-y-10 rounded-[25px] p-4 flex flex-col justify-center items-center`}
				style={{ backgroundColor: color }}
			>
				<h1 className="text-white text-3xl font-bold">{text1}</h1>
				<h1 className="text-white text-3xl font-bold">{text2}</h1>
			</div>
		</div>
	);
};

export default PaymentCard;
