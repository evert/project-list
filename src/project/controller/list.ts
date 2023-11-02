import { Controller } from '@curveball/controller';
import { Context } from '@curveball/core';
import { getProjects, create } from '../service';

class ProjectListController extends Controller {

  get(ctx: Context) {

    const projects = getProjects();
    ctx.response.body = {

      _links: {
        item: projects.map( project => ({
          href: '/project/' + project.id,
          title: project.name,
        })),
      },
      data: getProjects()

    };

  }

  post(ctx: Context) {

    create(ctx.request.body);

  }

}


export default new ProjectListController();
