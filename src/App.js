import { useState } from 'react';
import TagInput from './components/TagInput';
import { Title } from './components/TagInput/styles/style';

function App() {
  const [tags, setTags] = useState({
    controlled: [],
    controlledMax: [],
    controlledValid: [],
  });

  const handleAddTag = (tag, field) => {
    setTags((prev) => ({ ...prev, [field]: [...prev[field], { ...tag }] }));
  };
  const handleRemoveTag = (tagId, field) => {
    setTags((prev) => ({ ...prev, [field]: prev[field].filter((tag) => tag.id !== tagId)}));
  };

  const checkValid = (tag) => tag.length >= 3;

  return (
    <div className="app">
      <div style={{ marginBottom: '4rem' }}>
        <Title>Uncontrolled</Title>
        <TagInput />
      </div>
      <div style={{ marginBottom: '4rem' }}>
        <Title>Controlled</Title>
        <TagInput
          tags={tags.controlled}
          handleAddTag={(tag) => handleAddTag(tag, 'controlled')}
          handleRemoveTag={(tagId) => handleRemoveTag(tagId, 'controlled')}
        />
        <p>Number of tags {tags.controlled.length}</p>
      </div>
      <div style={{ marginBottom: '4rem' }}>
        <Title>Controlled Max Tags 5</Title>
        <TagInput
          maxTags={5}
          tags={tags.controlledMax}
          handleAddTag={(tag) => handleAddTag(tag, 'controlledMax')}
          handleRemoveTag={(tagId) => handleRemoveTag(tagId, 'controlledMax')}
        />
        <p>Number of tags {tags.controlledMax.length}</p>
      </div>
      <div style={{ marginBottom: '2rem' }}>
        <Title>{'Invalid if length < 3'}</Title>
        <TagInput
          tags={tags.controlledValid}
          handleAddTag={(tag) => handleAddTag(tag, 'controlledValid')}
          handleRemoveTag={(tagId) => handleRemoveTag(tagId, 'controlledValid')}
          checkValid={checkValid}
        />
      </div>
    </div>
  );
}

export default App;
