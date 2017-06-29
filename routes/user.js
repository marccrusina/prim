var express = require('express');
var sql = require('mssql');
var router = express.Router();

var config = {
    user: 'sa',
    password: 'P@ssw0rd',
    server: 'LTOPIITSS2412',
    database: 'RemoteWorkDB'
};

/* LOAD DATA FROM MSSQL */
router.get('/', function(req, res, next) {
var hasError = false;
sql.connect(config, function (err) {
    if (err) {
        console.log(err);
        res.json({error:"Failed to connect"});
    }
    else {
        var requestNormal = new sql.Request();
        console.log("Running Query");
        requestNormal.query('SELECT * FROM dbo.user', function (err, result) {
            if (err) {
                console.log(err);
                hasError = true;
                res.json({error:"Cannot retrieve practices data.", description: err});
            }
            else {
                var recordSet = result['recordset'];
                for (var index = 0; index <= recordSet.length - 1; index++) {
                    
                    }
                    sql.close();
                }
                if(hasError)
                    res.send({success:false});
                else 
                    res.json({success:true});
                console.log("Completed");
            });
        }
    }); // SQL CONNECTION
}); 

module.exports = router;