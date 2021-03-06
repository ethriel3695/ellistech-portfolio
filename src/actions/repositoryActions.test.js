import {expect} from 'chai';
import * as repoActions from './repositoryActions';
import * as types from './actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

const user = ['ethriel3695'];

describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create BEGIN_AJAX_CALL and LOAD_REPOS_SUCCESS when loading repos', (done) => {

    const expectedActions = [
      { type: types.BEGIN_AJAX_CALL },
      {type: types.LOAD_REPOS_SUCCESS, body: [{ profile: {login: 'ethriel3695'}, repos: [{id: 'title', name: 'ellistech-portfolio'}]}]}
    ];

    const store = mockStore({repos: []}, expectedActions);
    store.dispatch(repoActions.loadRepos(user)).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).to.deep.equal(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).to.deep.equal(types.LOAD_REPOS_SUCCESS);
    });
    done();
  });
});
