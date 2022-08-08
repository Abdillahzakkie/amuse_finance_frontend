import styled from "styled-components";

export const NavbarWrapper = styled.div`
	background: var(--white);
	grid-column: 1/4;

	.user {
		width: 100%;
		height: 120px;
		user-select: none;
		margin-bottom: 0.25em;

		.container {
			grid-template-columns: repeat(12, 1fr);
			background: var(--light);
			border-radius: 0.5em;
			padding: 0.5em;
			grid-gap: 0 0.5em;

			.profile-image {
				grid-column: 1/3;
				height: 100%;
				align-items: center;
				place-items: center;

				img {
					width: 50px;
					height: 50px;
					border-radius: 50%;
				}
			}

			.user-info {
				grid-template-columns: 11fr 1fr;
				grid-column: 3/13;
				align-items: center;
				letter-spacing: var(--letter-spacing);

				.copy {
					.icon {
					}
				}
			}
		}
	}

	.nav-links {
		width: 100%;
		height: auto;
		grid-gap: 0.25em 0;

		.active {
			border-left: 5px solid var(--blue);
		}

		.nav-item {
			height: 55px;
			align-items: center;
			transition: all 0.15s ease-in-out;

			grid-template-columns: repeat(12, 1fr);
			align-items: center;
			padding: 0 1em;
			grid-gap: 0 0.5em;

			&:hover,
			&:focus {
				border-left: 4px solid var(--blue);
			}

			.icon {
				grid-column: 1/2;
				font-size: 1.5em;
			}

			p {
				text-transform: capitalize;
				letter-spacing: var(--letter-spacing);
			}
		}
	}
`;
