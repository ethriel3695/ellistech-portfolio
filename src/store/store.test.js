import { expect } from 'chai';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as repoActions from '../actions/repositoryActions';

describe('Store', function () {
  it('Should handle loading repos', function () {
    const store = createStore(rootReducer, initialState);
    const repo = {
      title: 'Clean Code'
    };

    const action = repoActions.loadReposSuccess(repo);
    store.dispatch(action);

    const actual = store.getState().repos.title;

    const expected = 'Clean Code';
    expect(actual).to.deep.equal(expected);
  });
});
