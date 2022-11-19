import { gql } from "@apollo/client";

export const MainFooter = gql`
	query {
		main {
			data {
				id
				attributes {
					pieDePagina {
						id
						imagenLogo {
							data {
								id
								attributes {
									name
									url
								}
							}
						}
						descripcion
						columnaLinks {
							id
							titulo
							link {
								id
								nombre
								enlaceExterno
								url
								pagina {
									data {
										id
										attributes {
											titulo
											cuerpo
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
`;
