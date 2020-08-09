import React from 'react';
import { View,ScrollView } from 'react-native';
import styles from './styles'
import PageHeader from '../../components/PageHeader';
import TeactherItem from '../../components/TeacherItem';

function TeatcherList() {
    return (
    <View style={styles.container}>

        <PageHeader title="Teatchers"/>

        <ScrollView 
        style={styles.teacherList}
        contentContainerStyle={{
            paddingHorizontal:16,
            paddingBottom:24,
        }}>
            <TeactherItem/>
            <TeactherItem/>
            <TeactherItem/>
            <TeactherItem/>
        </ScrollView>
        
       
    </View>)
}


export default TeatcherList;