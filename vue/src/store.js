import { createStore } from 'vuex'
import router from './router'
import axios from 'axios'

export default createStore(' auth', {
    state: ()  => ({
        authUser: null,
    }),

    getters:{
        user:(state) => state.authUser
    },
    actions: {
        async getToken () {
            await axios.get('/sanctum/csrf-cookies')
        },
        async getUser() {
            this.getToken()
            const data = await axios.get('/api/user')
            this.authUser = data.data
        }
    }
})