import Grapnel                  from '../vendor/grapnel.router';
import initBrowsePageController from '../components/pages/browsePage/controller';
import _                        from 'lodash';

export function getRouter() {

  var router = new Grapnel({ pushState : true });
  var body = document.getElementsByTagName('body')[0];


  /* Browse page. Default mode is grid */
  router.get('/browse', function(req) {
    router.navigate('/browse/grid');
  });

  router.get('/browse/:mode', function(req) {
    let browseMode = req.params.mode;
    let initialData = {};

    if(window.bootstrappedData != null) {
      if(window.bootstrappedData.browsing != null) {
        initialData.browsing = window.bootstrappedData.browsing;
      }
      if(window.bootstrappedData.header != null) {
        initialData.header = window.bootstrappedData.header;
      }
    }

    _.set(initialData, 'browsing.browseMode', browseMode);

    initBrowsePageController(initialData, body);
  });





  return router;
}
