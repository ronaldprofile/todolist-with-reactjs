import { Container, Image } from "./styles";

interface IUser {
  name: string;
  avatar: string;
}
interface IProfileProps {
  user: IUser | undefined;
  setIsModalLogoutActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Profile({ user, setIsModalLogoutActive }: IProfileProps) {
  return (
    <Container>
      <strong>{user?.name || "Olá"}</strong>
      <Image
        src={
          user?.avatar ||
          "https://cdn.pixabay.com/photo/2018/02/06/19/53/parrot-3135551__340.jpg"
        }
        alt={user?.name || "anonymous"}
        onClick={() => setIsModalLogoutActive(true)}
      />
    </Container>
  );
}
