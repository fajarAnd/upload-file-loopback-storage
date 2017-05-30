'use strict';

const mime = require('mime-types');

module.exports = function(Image) {

  Image.uploadFile = (req,res,cb) => {

    Image.upload(req,res,{ acl:'public-read',container : 'qraved-id'},(err,result) => {
      if(err){
        cb(err);
      }else{
        cb(null,result);
      }
    })

  };

};
