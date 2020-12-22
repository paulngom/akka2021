
// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {
	Handlebars.registerHelper('compare', function (lvalue, operator, rvalue, options) {

    var operators, result;

    if (arguments.length < 3) {
        //throw new Error("Handlerbars Helper 'compare' a besoin de 2 parametres");
    }

    if (options === undefined) {
        options = rvalue;
        rvalue = operator;
        operator = "===";
    }

    operators = {
        '==': function (l, r) { return l == r; },
        '===': function (l, r) { return l === r; },
        '!=': function (l, r) { return l != r; },
        '!==': function (l, r) { return l !== r; },
        '<': function (l, r) { return l < r; },
        '>': function (l, r) { return l > r; },
        '<=': function (l, r) { return l <= r; },
        '>=': function (l, r) { return l >= r; },
        'typeof': function (l, r) { return typeof l == r; }
    };

    if (!operators[operator]) {
        //throw new Error("Handlerbars Helper 'compare' ne connait pas l'operateur " + operator);
    }

    result = operators[operator](lvalue, rvalue);

    if (result) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }

});

QuittanceView.prototype.template = Handlebars.compile($("#quittance-tpl").html());
PaiementsView.prototype.template = Handlebars.compile($("#paiements-tpl").html());
PaieView.prototype.template = Handlebars.compile($("#paie-tpl").html());
LcontratsView.prototype.template = Handlebars.compile($("#lcontrats-tpl").html());
BlkcontratView.prototype.template = Handlebars.compile($("#blankcontrat-tpl").html());
NwcontratView.prototype.template = Handlebars.compile($("#nouvcontrat-tpl").html());
McontratsView.prototype.template = Handlebars.compile($("#menucontrats-tpl").html());
DisposView.prototype.template = Handlebars.compile($("#dispos-tpl").html());

MenuView.prototype.template = Handlebars.compile($("#menu-tpl").html());
ConnectMeView.prototype.template = Handlebars.compile($("#connectme-tpl").html());
SplashView.prototype.template = Handlebars.compile($("#splash-tpl").html());
 $('body').html(new SplashView().render().$el);
   
}());

