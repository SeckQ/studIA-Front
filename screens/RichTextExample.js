import React, { useRef, useState, Component } from 'react';
import { View, StyleSheet, Button, TextInput } from 'react-native';
import { RichEditor, RichToolbar } from 'react-native-pell-rich-editor';
import {actions} from './const';

const RichTextExample = () => {
  const richText = useRef();
  const [formattedText, setFormattedText] = useState('');
  const [inputText, setInputText] = useState('');

  const handleSaveFormattedText = async () => {
    const html = await richText.current?.getContentHtml();
    setFormattedText(html);
  };

  return (
    <View style={styles.container}>
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
      />
      <View style={styles.buttonContainer}>
        <Button title="Guardar Texto" onPress={handleSaveFormattedText} />
      </View>
      <TextInput
        placeholder="texto con formato"
        multiline
        value={formattedText}
        onChangeText={setInputText}
        style={styles.textInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  richText: {
    top: 10,
    flex: 1,
    backgroundColor: 'transparent',
  },
  richToolbar: {
    height: 50,
    backgroundColor: '#F5FCFF',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
  },
});

export default RichTextExample;