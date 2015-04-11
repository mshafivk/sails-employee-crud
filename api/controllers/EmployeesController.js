/**
 * EmployeesController
 *
 * @description :: Server-side logic for managing employees
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  /*index:function(req,res){
    res.view();
    },*/
  new:function(req,res){
    res.view();
    },
   create:function(req,res,next){
    Employees.create(req.params.all(),function userCreated(err,employee){
            if(err)
            {
                console.log(err);
                req.session.flash={err:err
                 };
                return res.redirect('/employees/new');
            }
        //res.json(employee);
        res.redirect('/employees/show/'+employee.id);
    });
    },
    show:function(req,res,next){
        //   Employees.findOne(req.param('id'),function(err,employee) >> Can use this function with or without function name
    Employees.findOne(req.param('id'),function userFound(err,employee){
        if(err)return next(err);
        if(!employee)
             return next();
        res.view({employee:employee});
        });
    },

    index:function(req,res,next){

    Employees.find(function(err,employees){
            if(err)return next(err);
            res.view({employees:employees});
    });
    },
    edit:function(req,res,next){
        Employees.findOne(req.param('id'),function userFound(err,employee){
        if(err)return next(err);
        if(!employee)
           return next();
        res.view({employee:employee});
        });
    },
    update:function(req,res,next){
        Employees.update(req.param('id'),req.params.all(),function employeeUpdated(err){
            if(err)
            {
                console.log(err);
                req.session.flash={err:err
                 };
                return res.redirect('/employees/edit/'+req.param('id'));
            }
            res.redirect('/employees/show/'+req.param('id'));
        });
    },
    delete:function(req,res,next){
        Employees.findOne(req.param('id'),function userFound(err,employee){
        if(err)
            return next(err);
        if(!employee)
            return next('Employee doesn\'t exist.');
            Employees.destroy(req.param('id'),function userDestroyed(err){
            if(err)
                return next(err);
            });
            res.redirect('/employees');
    });
    }
    /*
    finaAll:function(req,res){
    Employees.findAll(function(err,employees){
        if(err)
            return res.send(err,500);
        res.view({model:employees})
    });
    }*/
};

