import React, { useState } from "react";
import { View, ScrollView } from "react-native";

import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";

import styles from "./styles";

function Favorites() {
	const [teachers, setTeachers] = useState([]);
	return (
		<View style={styles.container}>
			<PageHeader title='Meus proffys favoritos' />
			<ScrollView
				style={styles.teacherList}
				contentContainerStyle={{
					paddingHorizontal: 16,
					paddingBottom: 16,
				}}
			>
				{teachers.map((teacher: Teacher) => {
					return <TeacherItem key={teacher.id} teacher={teacher} />;
				})}
			</ScrollView>
		</View>
	);
}

export default Favorites;
