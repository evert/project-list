import router from '@curveball/router';
import homeController from './home/controller';
import projectListController from './project/controller/list'; 
import projectItemController from './project/controller/item'; 

export default [
  router('/', homeController),
  router('/project', projectListController),
  router('/project/:id', projectItemController)
];
