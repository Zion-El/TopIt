import React from "react";
import Image from "next/image";
import { useState } from "react";
import styles from "./service.module.css";

interface ServiceBoxProps {
	icon: string;
	text: string;
}

const ServiceBox: React.FC<ServiceBoxProps> = ({ icon, text }) => {
	const [hovered, setHovered] = useState(false);

	const handleMouseEnter = () => {
		setHovered(true);
	};

	const handleMouseLeave = () => {
		setHovered(false);
	};

	return (
		<div className={styles.containerr}>
			<div className={styles.icon}>
				<img src={icon} alt={text} />
			</div>
			<p>{text}</p>
		</div>
	);
};

function Services() {
	const servicesData = [
		{ icon: "images/svgs/device.svg", text: "Buy Airtime" },
		{ icon: "images/svgs/satellite-dish.svg", text: "Buy Data" },
		{ icon: "images/svgs/solar_tv-bold.svg", text: "Subscribe Cable TV" },
		{
			icon: "images/svgs/healthicons_electricity.svg",
			text: "Pay for Electricity",
		},
		{ icon: "images/svgs/zondicons_education.svg", text: "Result Checker" },
		{
			icon: "images/svgs/pepicons-pop_internet-circle.svg",
			text: "Broadband Internet",
		},
	];

	return (
		<div className="container">
			<div className={styles.serviceContainerWhole}>
				<div className={styles.serviceContainer}>
					{servicesData.map((service, index) => (
						<ServiceBox key={index} icon={service.icon} text={service.text} />
					))}
				</div>
			</div>
		</div>
	);
}

export default Services;
