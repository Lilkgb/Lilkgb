import constants from './../constants';
const {types} = constants;

export const getProjects = (information) => ({
  type: types.GITHUB_PROJECTS,
  information
})
