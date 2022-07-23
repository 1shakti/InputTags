import { nanoid } from 'nanoid';
import { useState } from 'react';
import Tag from '../Tag';
import { ErrorMessage, Input, InputContainer } from './styles/style';

export default function TagInput({ maxTags, tags, handleAddTag, handleRemoveTag, checkValid }) {
  const [inpTags, setInpTags] = useState([]);
  const [input, setInput] = useState('');
  const [status, setStatus] = useState({ });

  const addTag = () => {
    try {
    setStatus({});
    if (!input) return;
    if (maxTags && inpTags.length === maxTags) throw new Error(`Max number of tags allowed is ${maxTags}`);
    if (checkValid && !checkValid(input)) throw new Error('Invalid tag');

    const newTag = { id: nanoid(10), title: input };
    setInpTags((prev) => [...prev, { ...newTag }]);

    if (handleAddTag) {
      handleAddTag(newTag);
    }
    setInput('');
    } catch(err) {
        setStatus({ error: true, message: err.message })
    }
  };

  const removeTag = (id) => {
    setInpTags((prev) => prev.filter((tag) => tag.id !== id));
    if (handleRemoveTag) {
      handleRemoveTag(id);
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) addTag();
    if (e.keyCode === 8 && !input && inpTags.length > 0) {
        setStatus({});
        removeTag(inpTags[inpTags.length-1].id)
    }
  }
  return (
    <>
        <InputContainer>
        {(tags || inpTags).map((tag) => (
            <Tag
            key={tag.id}
            id={tag.id}
            title={tag.title}
            handleTagRemove={() => removeTag(tag.id)}
            />
        ))}
        <Input
            value={input}
            onChange={({ target }) => setInput(target.value)}
            onKeyDown={handleKeyPress}
        />
        </InputContainer>
        {status.error && <ErrorMessage>{status.message}</ErrorMessage>}
    </>
  );
}
