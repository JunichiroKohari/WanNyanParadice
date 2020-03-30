export const state = () => ({
    breed_list: {}
});

export const mutations = {
    breed_list_update(state, payload) {
        state.breed_list = {...payload}
    }
}

export const actions = {
    breed_list_update ({ commit }) {
        commit('breed_list_update')
    }
}
