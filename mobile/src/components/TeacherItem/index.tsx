import React from "react";
import { View, Image, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unFavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsAppIcon from "../../assets/images/icons/whatsapp.png";

import styles from "./styles";

function TeacherItem() {
	return (
		<View style={styles.container}>
			<View style={styles.profile}>
				<Image
					style={styles.avatar}
					source={{
						uri: "https://github.com/agftech.png",
					}}
				/>
				<View style={styles.profileInfo}>
					<Text style={styles.name}>Agf Tech</Text>
					<Text style={styles.subject}>Química</Text>
				</View>
			</View>
			<Text style={styles.bio}>
				Full Stack Developer
				{"\n"}
				{"\n"}
				In constant learning...
			</Text>

			<View style={styles.footer}>
				<Text style={styles.price}>
					Preço/Hora {"   "}
					<Text style={styles.priceValue}>R$ 20,00</Text>
				</Text>

				<View style={styles.buttonsContainer}>
					<RectButton style={[styles.favoriteButton, styles.favorited]}>
						{/* <Image source={heartOutlineIcon} /> */}
						<Image source={unFavoriteIcon} />
					</RectButton>

					<RectButton style={styles.contactButton}>
						<Image source={whatsAppIcon} />
						<Text style={styles.contactButtonText}>Entrar em contato</Text>
					</RectButton>
				</View>
			</View>
		</View>
	);
}

export default TeacherItem;
