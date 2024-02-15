import { createStore } from 'vuex'
import axios from './axios'

const store = createStore({
    state: ()  => ({
        authUser: null,
    }),

    getters:{
        user:(state) => state.authUser,
        isLoggedIn:(state) => !!state.authUser
    },
    actions: {
        async getToken () {
            await axios.get('/sanctum/csrf-cookie')
        },
        async getUser(context) {
            try {
                await context.dispatch('getToken')
                const response = await axios.get('/api/user');
                context.commit('setUser', response.data);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        },

        async handleLogout({ commit }) {
            try {
                await axios.post('/logout');
                commit('setUser', null);
            } catch (error) {
                console.error('Error logging out:', error);
            }
        },

        async forgotPassword({ commit }, email) {
            commit('clearAuthErrors'); 
            try {
              await axios.post('/forgot-password', { email });
            } catch (error) {
              if (error.response && error.response.status === 422) {
                commit('setAuthErrors', error.response.data.errors);
              } else {
                console.error('Forgot password request failed:', error);
              }
            }
        },
        async passwordReset({commit}, email, token) {
            try {
                await axios.post('/reset-password',{ email, token} );
                commit('Password reset successfully');
                router.push('/login');
            } catch (error) {
                if (error.response && error.response.status === 422) {
                    console.error('Password reset failed: Validation error');
                } else if (error.response && error.response.status === 404) {
                    console.error('Password reset failed: User not found');
                } else {
                    console.error('An error occurred during password reset:', error.message);
                }
            }
        },
       
    },

    mutations: {
        setUser(state, user) {
            state.authUser = user;
        }
    }
})

export default store;