/**
 * Created by mendieta on 10/23/16.
 */

import { environment } from "src/config";
export const LOCALE_CHANGED = "locale/changed";
export const LOCALE_LOADING = "locale/loading";
export const ASSET_LOADING = 'app/loading';
export const MENU_OPEN = 'locale/menuopened'

const state = {
    public: environment.url.public,
    locale: "",
    locale_loading: false,
    loading: true,
    menuOpened: false,
};

const actions = {
    [LOCALE_LOADING]({commit}){
        commit(LOCALE_LOADING, true);
    },
    [LOCALE_CHANGED]({commit}, locale){
        commit(LOCALE_CHANGED, locale);
    },
    [ASSET_LOADING]({commit}, payload){
        commit(ASSET_LOADING, payload);
    }
};

const mutations = {
    [LOCALE_CHANGED](state, locale){
        state.locale = locale;
        state.locale_loading = false;
    },
    [LOCALE_LOADING](state){
        state.locale_loading = true;
    },
    [ASSET_LOADING](state, payload){
        state.loading = payload;
    },
    MENU_OPEN: (state) => {
        state.menuOpened = !state.menuOpened;
    }
};

const getters = {
    locale: state => {
        return state.locale;
    },
    public: state => {
        return state.public;
    },
    menuOpened: state => {
        return state.menuOpened;
    }
};

export default {state, actions, mutations, getters};
