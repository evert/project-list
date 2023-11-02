import { Project } from '../types';
import { NotFound } from '@curveball/http-errors';

let projectList: Project[] = [
  {
  id: 1,
  name: 'My First Project',
  owner: 'Evert',
  developers: ['Evert', 'Aaron'],
  scrumMaster: 'Evert',
  startDate: new Date('20231102T120000Z'),
  methodology: 'Agile',
},
  {
  id: 2,
  name: 'My Second Project',
  owner: 'Evert',
  developers: ['Evert', 'Aaron'],
  scrumMaster: 'Evert',
  startDate: new Date('20231102T120000Z'),
  methodology: 'Agile',
},


];
export function getProjects() : Project[] {

  return projectList;

}

export function getProjectById(id:number): Project {

  const project = projectList.find(project => project.id === id);

  if (!project) {
    throw new NotFound('Could not find project with id ' + id);
  }

  return project;

}

export function update(project: Project) {

  const oldProject = getProjectById(project.id);
  oldProject.name = project.name;
  oldProject.developers = project.developers;
  oldProject.methodology = project.methodology;
  oldProject.startDate = project.startDate;
  oldProject.owner = project.owner;
  oldProject.scrumMaster = project.scrumMaster;

}

type NewProject = Omit<Project, 'id'>;

export function create(project: NewProject) {

  projectList.push({
    id: Math.floor(Math.random()*10000000),
    ...project
  });

}

export function remove(project: Project) {

  projectList = projectList.filter( p => p.id !== project.id);

}

