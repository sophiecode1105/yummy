import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { allMaterials, materialList } from '../../state/state';
import { Icon, TagInput, TagList, TagsContainer, TagTitle, TagWrap } from '../../styled/recipeList';

const Tag = () => {
  const [tags, setTags] = useRecoilState<string[]>(materialList);
  const getAllMaterails = useRecoilValue(allMaterials);

  const addTags = (event: React.FormEvent<HTMLSelectElement>) => {
    if ((event.target as HTMLInputElement).value !== '') {
      if (!getAllMaterails.includes((event.target as HTMLInputElement).value)) {
        alert('재료를 정확하게 입력해주세요');
      } else if (tags.includes((event.target as HTMLInputElement).value)) {
        alert('이미 추가된 재료입니다');
        (event.target as HTMLInputElement).value = '';
      } else {
        setTags([...tags, (event.target as HTMLInputElement).value]);
        console.log('렌더링횟수');
        (event.target as HTMLInputElement).value = '';
      }
    }
  };

  const removeTags = (indexToRemove: number) => {
    setTags(tags.filter((tag) => indexToRemove !== tags.indexOf(tag)));
  };

  return (
    <TagsContainer>
      <TagWrap>
        {tags.map((tag, index: number) => {
          return (
            <TagList key={index}>
              <TagTitle>
                {tag}
                <span>
                  <Icon className="fas fa-times" onClick={() => removeTags(index)} />
                </span>
              </TagTitle>
            </TagList>
          );
        })}
      </TagWrap>
      <TagInput
        type="text"
        placeholder="재료추가"
        onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => (event.key === 'Enter' ? addTags(event) : '')}
      />
    </TagsContainer>
  );
};

export default Tag;
