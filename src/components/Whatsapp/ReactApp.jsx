import React from "react";
import logo from '../../assets/img/logo.png';
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";

const ReactApp = () => {
	return (
		<WhatsAppWidget
			phoneNo="34641040558"
			position="left"
			widgetWidth="300px"
			widgetWidthMobile="260px"
			autoOpen={true}
			autoOpenTimer={60000}
			messageBox={true}
			messageBoxTxt=""
			iconSize="40"
			iconColor="white"
			iconBgColor="green"
			headerIcon={logo}
			headerIconColor="pink"
			headerTxtColor="black"
			headerBgColor="#AAF6AA"
			headerTitle="JUM AND GYM"
			headerCaption=" 🟢 Conectado"
			bodyBgColor="#bbb"
			chatPersonName="Entrenador"
			chatMessage={<>¡Hola PUMA! 👋 <br /><br /> ¿En que podemos ayudarte?</>}
			footerBgColor="#AAF6AA"
			btnBgColor="green"
			btnTxtColor="white"
		/>
	);
};

export default ReactApp;