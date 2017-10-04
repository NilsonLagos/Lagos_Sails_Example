/**
 * ContactosController
 *
 * @description :: Server-side logic for managing contactos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


  "new":function (req,res) {
  res.view();
  }
  ,
  listContactos:function(req,res){
    Contactos.query('spcontactosgrd', function(err,results){
      if(err){res.send(400);}
      else{
        res.search(results);
      }
    })
  },
  agregar: function(req,res,next){
    Contactos.create(req.allParams(),function contactosagregados(err, contactos) {
      if(err)return next(err);
      res.redirect('contactos/mostrarcontactos/'+contactos.id);
    });
  },
  mostrarcontactos: function(req,res,next){
    var inputId = req.param('id');
    Contactos.query('select * from contactos where id='+inputId,function contactossel(err, contactos) {
      if(err)return next(err);
      if(!contactos) return next();
      return res.view({
        contacto:contactos
      });
    });
  },

  // index: function(req,res,next){
  //   Contactos.query('select * from contactos',function contactosgrd(err, contactos) {
  //     if(err)return next(err);
  //
  //     res.view({
  //       contactos:contactos
  //     });
  //   });
  // },

  index:function(req,res,next){
    Contactos.query('select * from contactos',function contactosgrd(err, contactos) {
      if(err)return next(err);
      return res.view('contactos/index',{ listacontactos:contactos});

      // return res.json(contactos);
    });
  },
  edit: function(req,res,next){
    var inputId = req.param('id');
    Contactos.findOne(inputId,function contactosedit(err, contactos) {
      if(err)return next(err);
      if(!contactos) return next();
      return res.view({
        contacto:contactos
      });
    });
  },
  update:function (req,res,next) {
    var inputId=req.param('id');
    Contactos.update(inputId,req.params.all(),function contactosupdate(err){
      if(err){return res.redirect('/contactos/edit/'+inputId);}
      console.log(err);
      res.redirect('/contactos/mostrarcontactos/'+inputId);
    });

  }

};

