import { TagContainer, TagRemove, TagText } from "./styles/style";

export default function Tag({ title, handleTagRemove }) {
    return (
        <TagContainer>
            <TagText>{title}</TagText>
            <TagRemove onClick={handleTagRemove}>
                <img src={'./assets/icons/close-icon.svg'} alt="Remove Tag" />
            </TagRemove>
        </TagContainer>
    )
}