import { Controller } from '@curveball/controller';
import { Context } from '@curveball/core';
import { getProjectById, update, remove } from '../service';

class ProjectItemController extends Controller {

  get(ctx: Context) {

    const project = getProjectById(+ctx.params.id);
    ctx.response.body = {
      _links: {
        up: {
          href: '/project',
          title: 'Back to project list',
        }
      },
      ...project
    };

  }

  put(ctx: Context) {

    update(ctx.request.body);

  }

  delete(ctx: Context) {

    const project = getProjectById(+ctx.params.id);
    remove(project);

  }

}


export default new ProjectItemController();
