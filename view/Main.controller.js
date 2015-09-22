sap.ui.controller("sap.training.exc16.messages.view.Main", {

	onInit: function() {

		var oView = this.getView();

		oView.setModel(new sap.ui.model.json.JSONModel(), "input");

		oView.byId("idMsgTable").setModel(
			sap.ui.getCore().getMessageManager().getMessageModel(), "message");

	},

	onShowCarrier: function() {

		var oMessageManager = sap.ui.getCore().getMessageManager();
		var oMessageProcessor = new sap.ui.core.message.ControlMessageProcessor();
		oMessageManager.registerMessageProcessor(oMessageProcessor);

		oMessageManager.addMessages(
			new sap.ui.core.message.Message({
				message: "Button pressed",
				type: sap.ui.core.MessageType.Success,
				processor: oMessageProcessor
			})
		);

		var oView = this.getView();
		var oInputData = oView.getModel("input").getData();

		oView.bindElement({
			path: "travel>/CarrierSet('" + oInputData.carrierId + "')"
		});
	},

	onDeleteMessages: function() {
		var oMessageManager = sap.ui.getCore().getMessageManager();
		oMessageManager.removeAllMessages();
	}

});