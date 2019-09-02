import * as axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const usersAPI = {

	getUsers(currentPageNumber , pageSize) {
		return instance.get(`users?page=${currentPageNumber}&count=${pageSize}`)
		.then(response => {
			return response.data
		})
	},

	getUserProfile(userId) {
		return instance.get(`profile/` + userId);
	},

	getUserStatus(userId) {
		return instance.get(`profile/status/` + userId)
	}
};

export const authAPI = {
	
	authMe() {
		return instance.get(`auth/me`)
		.then(response => {
			return response.data
		})
	},

	login(email , password , rememberMe) {
		return instance.post(`auth/login` , {email , password , rememberMe})
	},

	logout() {
		return instance.delete(`auth/login`)
	}
};
 
/*axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)*/
/*axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPageNumber}&count=${this.props.pageSize}`)*/