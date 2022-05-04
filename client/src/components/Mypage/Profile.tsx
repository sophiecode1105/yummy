import { Button } from '../../styled/materialList';
import { ButtonBox, Container, Introduce, UserAvatar, UserInfoBox, UserNick, Wrap } from '../../styled/mypage';

const Profile = ({
  userdata,
}: {
  userdata: { email: string; nickName: string; img: string; intro: string; likes: []; recipes: [] };
}) => {
  let { email = '', nickName = '', img = '', intro = '', likes = [], recipes = [] } = userdata;

  console.log('이메일 나오니', email);
  console.log('좋아요리스트', likes);
  return (
    <Container>
      <UserInfoBox>
        <Wrap>
          <UserAvatar src="https://icon-library.com/images/unknown-person-icon/unknown-person-icon-4.jpg" />
          <UserNick>{nickName}</UserNick>
        </Wrap>
        <Introduce>봄바는 왈왈 꼬몽은 웍웍 샤루는 워우우우우어{intro}</Introduce>
      </UserInfoBox>
      <ButtonBox>
        <Button>Modify</Button>
      </ButtonBox>
    </Container>
  );
};

export default Profile;
