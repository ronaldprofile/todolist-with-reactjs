import { Container, Image } from "./styles";

interface IUser {
  name: string;
  avatar: string;
}

interface IProfileProps {
  user: IUser | undefined;
}

export function Profile({ user }: IProfileProps) {
  return (
    <Container>
      <strong>{user?.name || ""}</strong>
      <Image
        src={
          user?.avatar ||
          "https://images-apilist-fun.sfo2.cdn.digitaloceanspaces.com/adorable_avatars_api.png"
        }
        alt={user?.name}
      />
    </Container>
  );
}
