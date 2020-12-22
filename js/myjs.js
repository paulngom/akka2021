function loadMenu(){
		var menuview=new MenuView();
		menuview.setJson({});
		$('body').html(menuview.$el);
}

function loadDispos(){
		var disposview=new DisposView();
		disposview.setJson({});
		$('body').html(disposview.$el);
}

function loadMcontrats(){
		var mcontratsview=new McontratsView();
		mcontratsview.setJson({});
		$('body').html(mcontratsview.$el);
}

function loadNwcontrat(){
		var nwcontratview=new NwcontratView();
		nwcontratview.setJson({});
		$('body').html(nwcontratview.$el);

}

function saveContrat(){
	vex.dialog.alert(showAlert("Contrat bien enregistr&eacute;!"));
 }
 

function loadPay(){

}

function retBack(){
		var disposview=new DisposView();
		disposview.setJson({});
		$('body').html(disposview.$el);
}

function loadBlankCt(){
		var blkcontratview=new BlkcontratView();
		blkcontratview.setJson({});
		$('body').html(blkcontratview.$el);

}

function retBackMc(){
	loadMcontrats();
}


function loadLcontrats(){
		var lcontratsview=new LcontratsView();
		lcontratsview.setJson({});
		$('body').html(lcontratsview.$el);
	
}

function setPaie(){
	var paieview=new PaieView();
	paieview.setJson({});
	$('body').html(paieview.$el);
}

function setDispo(){
			/*var lcontratsview=new LcontratsView();
			lcontratsview.setJson({});
			$('body').html(lcontratsview.$el);*/
			
			document.getElementById("topl").style.background="#FFFFFF";
			document.getElementById("topl").innerHTML="en cours";
}
function loadPaie(){
  var msg=showAlert("Si vous voulez continuer avec un paiement, cliquez sur le bouton PAIEMENT. Si le local est disponible, cliquez sur LOCAL DISPO. Sinon ANNULER pour tout autre choix.");
  vex.dialog.open({
    message: msg,
     input: [
        '<button class="btn btn-positive" onclick="setDispo();">LOCAL DISPO</button>',
        '&nbsp;<button class="btn btn-positive" onclick="setPaie();">PAIEMENT</button>',
       '&nbsp;<button class="btn btn-positive" onclick="window.close();">ANNULER</button>'
  ].join(''),
    buttons: [
    ],

});
}

function savePaie(){
		var quittanceview=new QuittanceView();
		quittanceview.setJson({});
		$('body').html(quittanceview.$el);
	//vex.dialog.alert(showAlert("Paiement bien enregistr&eacute;!"));
}
function retBackLc(){
		var lcontratsview=new LcontratsView();
		lcontratsview.setJson({});
		$('body').html(lcontratsview.$el);
}

function loadPayments(){
	var paiementsview=new PaiementsView();
	paiementsview.setJson({});
	$('body').html(paiementsview.$el);
	
}


function showAlert(amessage){
    document.getElementById("divholder").innerHTML=amessage;
    return document.getElementById("divholder").innerHTML;
}

function alertjqry(messagevalue){
$("#mydialog").dialog({
open: function() {
    var markup = messagevalue;
    $(this).html(markup);
  },
  buttons:{
  'Ok': function(e){
            $("#mydialog").dialog('close');
        }
  }
});
}