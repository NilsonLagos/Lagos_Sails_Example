/**
 * Contactos.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  schema:true,
  conection:'NodeSailsMsSql',
  tableName:'contactos',
  autoUpdatedAt: false,
  autoCreatedAt:false,


  attributes: {

    nombre:{
      type:'string',
      required:true
    },
    telefonocel:{
      type:'int'
    },
    telefonocasa:{
      type:'int'
    },
    telefonotrabajo:{
      type:'int'
    },
    correo:{
      type:'string',
      email:true
    },
    idtipocontacto:{
      type:'integer',
      required:true
    }

  }
};

