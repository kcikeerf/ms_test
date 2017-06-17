const fs = require('fs');
const ncp = require('ncp').ncp;
const path = require('path');
const rimraf = require('rimraf');
const mkdirp = require('mkdirp');
const moment = require('moment');

// current date
var currentDate = moment().format("YYYYMMDDHH");

var oldPaths = [
    'apps/'+currentDate+'/build/',
    'apps/'+currentDate+'/font/',
    'apps/'+currentDate+'/img/',
    'apps/'+currentDate+'/share/',
    'apps/'+currentDate+'/style/'
];

// oldPaths = [
//     'apps/'
// ];

for (var i in oldPaths) {
    var oldPath = oldPaths[i];
    var newPath = oldPath.replace('apps', 'cdn');
    mv(oldPath, newPath, function(err) {
        console.log(err);
    });
}

function mv(source, dest, options, cb){
    if (typeof options === 'function') {
        cb = options;
        options = {};
    }
    var shouldMkdirp = !!options.mkdirp;
    var clobber = options.clobber !== false;
    var limit = options.limit || 16;

    if (shouldMkdirp) {
        mkdirs();
    } else {
        doRename();
    }

    function mkdirs() {
        mkdirp(path.dirname(dest), function(err) {
            if (err) return cb(err);
            doRename();
        });
    }

    function doRename() {
        if (clobber) {
            fs.rename(source, dest, function(err) {
                if (!err) return cb();
                if (err.code !== 'EXDEV') return cb(err);
                moveFileAcrossDevice(source, dest, clobber, limit, cb);
            });
        } else {
            fs.link(source, dest, function(err) {
                if (err) {
                    if (err.code === 'EXDEV') {
                        moveFileAcrossDevice(source, dest, clobber, limit, cb);
                        return;
                    }
                    if (err.code === 'EISDIR' || err.code === 'EPERM') {
                        moveDirAcrossDevice(source, dest, clobber, limit, cb);
                        return;
                    }
                    cb(err);
                    return;
                }
                fs.unlink(source, cb);
            });
        }
    }
}

function moveFileAcrossDevice(source, dest, clobber, limit, cb) {
    var outFlags = clobber ? 'w' : 'wx';
    var ins = fs.createReadStream(source);
    var outs = fs.createWriteStream(dest, {flags: outFlags});
    ins.on('error', function(err){
        ins.destroy();
        outs.destroy();
        outs.removeListener('close', onClose);
        if (err.code === 'EISDIR' || err.code === 'EPERM') {
            moveDirAcrossDevice(source, dest, clobber, limit, cb);
        } else {
            cb(err);
        }
    });
    outs.on('error', function(err){
        ins.destroy();
        outs.destroy();
        outs.removeListener('close', onClose);
        cb(err);
    });
    outs.once('close', onClose);
    ins.pipe(outs);
    function onClose(){
        fs.unlink(source, cb);
    }
}

function moveDirAcrossDevice(source, dest, clobber, limit, cb) {
    var options = {
        stopOnErr: true,
        clobber: false,
        limit: limit,
    };
    if (clobber) {
        rimraf(dest, { disableGlob: true }, function(err) {
            if (err) return cb(err);
            startNcp();
        });
    } else {
        startNcp();
    }
    function startNcp() {
        ncp(source, dest, options, function(errList) {
            if (errList) return cb(errList[0]);
            rimraf(source, { disableGlob: true }, cb);
        });
    }
}
