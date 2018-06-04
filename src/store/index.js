import vuex from 'vuex';

let actions;
let mutations;
let getters;

export default new vuex.Store({
  state: {
    projects: [
      { id: '0',
        title: 'project 12',
        subtitle: 'a project',
        tags: [{ id: '0', name: 'design' }, { id: '1', name: 'programming' }],
        year: '2018',
      },
      {
        id: '1',
        title: 'project 1234232',
        subtitle: 'a project',
        tags: ['0', '1'],
        year: '2018',
      },
    ],
    tags: [
      { id: '0', name: 'design' },
      { id: '1', name: 'programming' },
    ],
  },
  getters,
  actions,
  mutations,
});


actions = {

};

mutations = {

};
