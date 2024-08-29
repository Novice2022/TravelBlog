import axios from 'axios';
import { AxiosError } from 'axios';
import { defineStore } from 'pinia'

import {
	ResponseError,
	fetchUser,
} from '@/config/static'


export const useAuthStore = defineStore(
	"auth",
	{
		state() {
			return {
				userId: -1,
				token: localStorage.getItem('authToken') ?? "",
                isAuthenticated: false,

				fullName: "Testoviy Test Testovich",
				city: "Testik",
				country: "Testion",
				bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. " + 
					"Dignissimos in illo autem sunt minus magnam repellat et " + 
					"accusantium explicabo temporibus placeat a consectetur " + 
					"nesciunt tenetur, optio vel est maxime nisi?",
				photo: "",
				hasImage: false,
			}
		},
		actions: {
			/**
			 * Saves actual information about the user to the `auth` store.
			 * 
			 * @param { string } email Users email.
			 * @param { string } password Users password.
			 */
			async login(
				email: string,
				password: string
			) {				
				let response;

				try {
					response = await axios.post(
						"login/",
						{
							email: email,
							password: password
						}
					);
					
					if (response.statusText !== "OK") {
						throw new ResponseError(
							response.statusText,
							response.status,
						);
					}
		
					const token = response.data.token;
					localStorage.setItem('authToken', token);
	
					this.token = token;
					this.isAuthenticated = true;
				} catch(error) {
					if (error instanceof AxiosError) {
						throw new ResponseError(
							error.message,
							error.status ?? 400
						);
					}
				}

				let user = await fetchUser();

				if (user.statusText === "OK") {
					const data = user.data;

					this.userId = data.id;

					this.fullName = data.full_name || this.fullName;
					this.city = data.city || this.city;
					this.country = data.country || this.country;
					this.bio = data.bio || this.bio;
					this.photo = data.photo || this.photo;

					if (this.photo) {
						this.hasImage = true;
					}
				} else {
					throw new ResponseError(
                        user.statusText,
						user.status,
					);
				}
			},
			/**
             * Logs out the user and clears the `auth` store.
             */
            logout() {
				this.$reset();	
			},
		},
	}
)
