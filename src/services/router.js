import Grapnel            from '../vendor/grapnel.router';
import * as controller    from '../components/pages/browsePage/controller';

export function getRouter() {

  var router = new Grapnel({ pushState : true });
  var body = document.getElementsByTagName('body')[0];

  /* Browse page. Default mode is grid */
  router.get('/browse', function(req) {
    router.navigate('/browse/grid');
  });

  router.get('/browse/:mode', function(req) {
    var browseMode = req.params.mode;
    controller.render(controller.page, controller.dataTree, body);
  });

  return router;
}
