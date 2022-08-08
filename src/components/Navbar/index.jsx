import React from "react";
import { NavLink } from "react-router-dom";
import { FiCopy } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { NavbarWrapper } from "./style";

function Navbar() {
	const _links = [
		{
			name: "home",
			icon: CgProfile,
		},
		{
			name: "dashboard",
			icon: CgProfile,
		},
		{
			name: "messages",
			icon: CgProfile,
		},
		{
			name: "dex",
			icon: CgProfile,
		},
		{
			name: "bridge",
			icon: CgProfile,
		},
	];

	const navLinks = _links.map((item, key) => {
		return (
			<NavLink
				key={key}
				to={item.name === "home" ? "/" : `/${item.name}`}
				className={({ isActive }) =>
					isActive ? "grid nav-item active" : "grid nav-item"
				}
			>
				<item.icon className="icon" />
				<p>{item.name}</p>
			</NavLink>
		);
	});
	return (
		<NavbarWrapper className="navbar">
			<section className="grid user">
				<section className="grid container">
					<section className="grid profile-image">
						<img
							src="https://avatars3.githubusercontent.com/u/52709818?s=460&u=f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f&v=4"
							alt="profile"
						/>
					</section>
					<section className="grid user-info">
						<section className="grid">
							<h4>DragonLord</h4>
							<small>0x000...00000</small>
						</section>
						<FiCopy className="icon" />
					</section>
				</section>
			</section>

			<ul className="grid nav-links">{navLinks}</ul>
		</NavbarWrapper>
	);
}

export default Navbar;
