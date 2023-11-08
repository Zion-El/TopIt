import React from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import styles from "./service.module.css";

interface ServiceBoxProps {
	icon: string;
	text: string;
	hoverIcon: string;
	hoverText: string;
}

const ServiceBox: React.FC<ServiceBoxProps> = ({
	icon,
	text,
	hoverIcon,
	hoverText,
}) => {
	const [hovered, setHovered] = useState(false);

	const handleMouseEnter = () => {
		setHovered(() => !hovered);
	};

	const handleMouseLeave = () => {
		setHovered(() => !hovered);
	};
	const iconClass = hovered ? styles["hovered-icon"] : "";
	return (
		<div
			className={styles.containerr}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<div className={styles.icon}>
				{!hovered && <img src={icon} alt={text} className="iconImg" />}
				{hovered && <p>{hoverText}</p>}
				{/* {hovered && <Link href="/service">{hoverIcon}</Link>} */}
				{/* <img src={hovered ? hoverIcon : icon} alt={text} /> */}
			</div>
			{!hovered && <p>{text}</p>}
			{hovered && (
				<Link href="/service">
					<span className={iconClass}>{hoverIcon}</span>
				</Link>
			)}
			{/* <p>{hovered ? hoverText : text}</p> */}
		</div>
	);
};

function Services() {
	const servicesData = [
		{
			icon: "images/svgs/device.svg",
			text: "Buy Airtime",
			hoverText: "Mtn, Glo, Airtel, 9mobile",
			hoverIcon: "Buy Airtime",
		},
		{
			icon: "images/svgs/satellite-dish.svg",
			text: "Buy Data",
			hoverText: "Mtn, Glo, Airtel, 9mobile",
			hoverIcon: "Buy Data",
		},
		{
			icon: "images/svgs/solar_tv-bold.svg",
			text: "Subscribe Cable TV",
			hoverText: "Dstv, Gotv, Startimes",
			hoverIcon: "Subscribe Cable TV",
		},
		{
			icon: "images/svgs/healthicons_electricity.svg",
			text: "Pay for Electricity",
			hoverText: "Ibedc, Ekedc, Aedc",
			hoverIcon: "Pay for Electricity",
		},
		{
			icon: "images/svgs/zondicons_education.svg",
			text: "Result Checker",
			hoverText: "Waec, Neco, Nabteb, Utme ",
			hoverIcon: "Result Checker",
		},
		{
			icon: "images/svgs/pepicons-pop_internet-circle.svg",
			text: "Broadband Internet",
			hoverText: "Smile, Spectranet, e.t.c",
			hoverIcon: "Broadband Internet",
		},
	];

	return (
		<div className="container">
			<div className={styles.serviceContainer}>
				{servicesData.map((service, index) => (
					<ServiceBox
						key={index}
						icon={service.icon}
						text={service.text}
						hoverText={service.hoverText}
						hoverIcon={service.hoverIcon}
					/>
				))}
			</div>
		</div>
	);
}

export default Services;
