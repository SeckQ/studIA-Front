import React, { useRef, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { RichEditor, RichToolbar } from 'react-native-pell-rich-editor';
import { actions } from './const';

const Nota = ({route}) => {
    const richText = useRef();
    const [formattedText, setFormattedText] = useState('');
    const navigation = useNavigation();
    const {materiaId} = route.params;

    const handleSaveFormattedText = async () => {
        const html = await richText.current?.getContentHtml();
        setFormattedText(html);
        navigation.navigate('DetallesNota', { contenido: html, materiaId: materiaId  });
    };

    const handleCancel = () => {
        // Aquí puedes agregar la lógica para cancelar
        console.log('Nota cancelada');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Crear Nota</Text>
            <RichEditor
                ref={richText}
                style={styles.richText}
                placeholder={'Empieza a escribir...'}
            />
            <RichToolbar
                style={styles.richToolbar}
                getEditor={() => richText.current}
                actions={[
                    'keyboard',
                    'bold',
                    'italic',
                    'underline',
                    'orderedList',
                    'checkboxList',
                    actions.outdent,
                    actions.alignRight,
                    actions.fontSize,
                    'redo',
                    'undo',
                    'removeFormat',
                    'heading1',
                    'heading2',
                    'heading3',
                    'heading4',
                    'heading5',
                    'heading6',
                    'fontSize',
                    'link',
                ]}
                iconMap={{
                    heading1: require('../assets/h1.png'),
                    heading2: require('../assets/h2.png'),
                    heading3: require('../assets/h3.png'),
                    heading4: require('../assets/h4.png'),
                    heading5: require('../assets/h5.png'),
                    heading6: require('../assets/h6.png'),
                }}
            />
            <View style={styles.buttonContainer}>
                <Button mode="outlined" onPress={handleCancel} color="red" style={styles.button}>
                    Cancelar
                </Button>
                <Button mode="contained" onPress={handleSaveFormattedText} style={styles.button}>
                    Guardar Nota
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    richText: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    richToolbar: {
        height: 50,
        backgroundColor: '#F5FCFF',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
    },
    button: {
        marginHorizontal: 5,
    },
});

export default Nota;
